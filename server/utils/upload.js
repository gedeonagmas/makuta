const multer = require("multer");

const filter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const diskStorage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "./uploads");
  // },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename +
        Date.now() +
        Math.round(Math.random() * 1e9) +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: diskStorage });
module.exports = { upload };
