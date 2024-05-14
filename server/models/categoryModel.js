const mongoose = require("mongoose");
const valid = require("../utils/validator");
const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      validate: valid.paragraph("Address", 4, 200),
      required: [true, "Service area name is required"],
    },
    type: {
      type: String,
      enum: {
        values: ["civil", "crime"],
        message: "Type must be either 'civil' or 'crime'",
      },
      required: [true, "Type must be either 'civil' or 'crime'"],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
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

categorySchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
categorySchema.plugin(uniqueValidator);

const Category = mongoose.model("category", categorySchema);
module.exports = { Category };
