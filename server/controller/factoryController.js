const asyncCatch = require("express-async-catch");
const AppError = require("../utils/AppError");
const { selectModel } = require("../utils/selectModel");
const v2 = require("./../config/cloudinary");

const api = "http://localhost:5000/uploads/";

const encrypt = (query) => {
  return btoa(query);
};

const decrypt = (query) => {
  return atob(query);
};

const fileHandler = (value, req) => {
  console.log(req.files, "files", req.file);
  if (req.files) {
    if (req.files.profilePicture) {
      value.profilePicture = api + req.files.profilePicture[0]?.filename;
    }
  }
  return value;
};

//create
const _create = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.params.table, next);

  if (model) {
    const count = (await model.countDocuments()) + 1;
    if (req.files?.attachments === undefined) {
      const data = await model.create({
        ...req.body,
        // attachments: results?.length > 0 ? results : undefined,
        caseId:
          req.params.table === "cases"
            ? req.body.caseId + count.toString().padStart(9, "0")
            : undefined,
      });

      if (!data)
        return next(
          new AppError("something went wrong unable to create the data")
        );

      return res.status(201).json({
        status: "Success",
        message: "data created successfully",
        data,
      });
    } else {
      let results = [];
      req.files?.attachments?.map(async (file, i) => {
        console.log(file, "files");
        results.push(file[0].path);

        if (results.length === req.files.attachments.length) {
          const data = await model.create({
            ...req.body,
            attachments: results,
            caseId:
              req.params.table === "cases"
                ? req.body.caseId + count.toString().padStart(10, "0")
                : undefined,
          });

          if (!data)
            return next(
              new AppError("something went wrong unable to create the data")
            );

          return res.status(201).json({
            status: "Success",
            message: "data created successfully",
            data,
          });
        }
      });
    }
  }
});

//read
const _read = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.params.table, next);
  if (model) {
    // const total = await model.find({ _id: req.params.id });
    const total = await model.countDocuments();
    const params = { ...req.query };
    console.log(params, "params");
    //removing unnecessary queries for filtering
    const remove = [
      "sort",
      "page",
      "limit",
      "fields",
      "limits",
      "searchField",
      "searchValue",
      "populatingType",
      "populatingValue",
    ];
    remove.forEach((el) => delete params[el]);

    //filtering
    let queryObject = JSON.parse(
      JSON.stringify(params).replace(
        /\b(gte|lte|lt|gt|eq|neq)\b/g,
        (match) => `$${match}`
      )
    );
    console.log(queryObject, "object");

    //searching
    if (req.query.searchField)
      queryObject[req.query.searchField] = new RegExp(
        req.query.searchValue,
        "gi"
      );
    // queryObject[req.query.searchField] = new RegExp('(>[^<.]*)(' + req.query.searchValue + ')([^<.]*)','gi');

    //sorting
    const query = model.find({ ...queryObject });
    req.query.sort
      ? query.sort(req.query.sort.split(",").join(" "))
      : query.sort("createdAt");

    //limiting fields
    const fields = req.query.fields
      ? req.query.fields.split(",").join(" ")
      : "-_v";
    query.select(fields);

    //pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || null;
    const skip = (page - 1) * limit;
    query.skip(skip).limit(limit);

    //populating
    // console.log(req.query);
    switch (req.query.populatingType) {
      case "users":
        query.populate(req.query.populatingValue);
        break;
      case "applications":
        query.populate(req.query.populatingValue);
        break;
      case "cases":
        query.populate(req.query.populatingValue);
        break;
      // query.populate(req.query.populatingValue.split(",").join(" "));
      default:
        query;
    }

    // req.query.limits ? query.limit(req.query.limits) : null;
    const data = await query;

    //last page indicator
    if (page) {
      const doc = await model.countDocuments();
      if (skip >= doc)
        return res.status(200).json({ message: "you are in the last page" });
    }
    if (data.length < 1)
      return next(new AppError("There is no data to display", 400));

    return res.status(200).json({
      status: "success",
      length: data.length,
      total: total,
      data: data,
    });
  }
  return next(new AppError("something went wrong please try again!!", 500));
});

//update
const _update = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.params.table, next);
  // const value = { ...req.body };
  // const files = fileHandler(value, req);
  // if (model) {
  // console.log(req.files);
  if (!req.files || !req.files.profilePicture) {
    const data = await model.findOneAndUpdate(
      { _id: req.query.id },
      { ...req.body },
      { runValidators: true }
    );

    if (!data) {
      return next(
        new AppError("something went wrong unable to update the data")
      );
    }

    return res.status(201).json({
      status: "Success",
      message: "data updated successfully",
    });
  }
  v2.uploader.upload(
    req.files.profilePicture[0].path,
    async function (err, result) {
      if (err) {
        console.log(err, "errors cloud");
        return res
          .status(500)
          .json({ message: "something went wrong account not created" });
      } else {
        const data = await model.findOneAndUpdate(
          { _id: req.query.id },
          { ...req.body, profilePicture: result.secure_url },
          { runValidators: true }
        );

        if (!data) {
          return next(
            new AppError("something went wrong unable to update the data")
          );
        }

        return res.status(201).json({
          status: "Success",
          message: "data updated successfully",
        });
      }
    }
  );

  // return next(new AppError("something went wrong please try again!!", 500));
});

//delete
const _delete = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.params.table, next);

  if (model) {
    const data = await model.findByIdAndUpdate(
      { _id: req.query.id },
      { deleted: req.body.type === "delete" ? true : false }
    );

    if (!data)
      return next(
        new AppError("something went wrong unable to delete the data")
      );

    return res
      .status(201)
      .json({ status: "Success", message: "data deleted successfully" });
  }
  return next(new AppError("something went wrong please try again!!", 500));
});

//read single data
const _read_single = asyncCatch(async (req, res, next) => {
  const model = selectModel(req.params.table, next);

  const query = model.find({ _id: req.params.id });

  //populating
  switch (req.query.populatingType) {
    case "private":
      query.populate(req.query.pp_ff);
      break;
    case "application":
      query.populate(req.query.pp_ff.split(",").join(" "));
    default:
      query;
  }

  const data = await query;
  // const data = await query.sort("-createdAt").limit(req.query.limits);

  if (!data)
    return next(new AppError("something went wrong unable to fetch the data"));

  return res
    .status(201)
    .json({ status: "Success", message: "data fetched successfully", data });
});

module.exports = { _create, _read, _update, _delete, _read_single };
