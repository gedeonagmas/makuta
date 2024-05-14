const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "permission name is required"],
    },
    roles: {
      type: Object,
      required: [true, "roles are required"],
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

const Permission = mongoose.model("permission", permissionSchema);
module.exports = { Permission };
