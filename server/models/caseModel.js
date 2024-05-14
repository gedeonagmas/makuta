const mongoose = require("mongoose");
const valid = require("../utils/validator");
const uniqueValidator = require("mongoose-unique-validator");

const caseSchema = new mongoose.Schema(
  {
    caseId: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },

    category: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },

    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "category",
    //   required: [true, "please select a category"],
    // },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      // required: [true, "please select a category"],
    },

    lawyers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "user",
      // required: [true, "please select a category"],
    },

    type: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },
    subType: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },
    services: {
      type: [String],
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },

    description: {
      type: String,
      validate: valid.paragraph("Description", 100, 1000),
      required: [true, "Description is required"],
    },

    // caseManager: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "case-manager",
    //   required: [true, "Please select case manager"],
    // },
    paymentDetail: {
      total: { type: Number, default: 0 },
      remaining: { type: Number, default: 0 },
      payed: { type: Number, default: 0 },
      pending: { type: Number, default: 0 },
      rounds: {
        type: [
          {
            amount: { type: Number, default: 0 },
            percent: { type: Number, default: 0 },
            deadline: { type: String },
            status: { type: String, default: "Pending" },
          },
        ],
      },
      paymentDescription: {
        type: String,
        validate: valid.paragraph("Payment Description", 0, 1000),
      },
      customerAgreementStatus: {
        type: String,
        default: "Pending",
      },
    },

    status: {
      type: String,
      default: "Pending",
    },

    year: {
      type: Number,
      default: new Date().getFullYear() * 1,
    },

    // deleted: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

caseSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
caseSchema.plugin(uniqueValidator);
const Case = mongoose.model("case", caseSchema);
module.exports = { Case };
