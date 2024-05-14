const { Application } = require("../models/applicationModel");
const { CaseManager } = require("../models/caseManagerModel");
const { Case } = require("../models/caseModel");
const { Category } = require("../models/categoryModel");
const { Group } = require("../models/groupModel");
const { Lawyer } = require("../models/lawyerModel");
const { Business } = require("../models/businessModel");
const { Payment } = require("../models/paymentModel");
const { Permission } = require("../models/permissionModel");
const { User } = require("../models/userModel");
const AppError = require("./AppError");
const { Private } = require("../models/privateModel");

const selectModel = (name, next) => {
  let model;
  switch (name) {
    case "users":
      model = User;
      break;
    case "institutions":
      model = Institution;
      break;
    case "permissions":
      model = Permission;
      break;
    case "cases":
      model = Case;
      break;
    case "categories":
      model = Category;
      break;
    case "applications":
      model = Application;
      break;
    case "payments":
      model = Payment;
      break;
    case "case-managers":
      model = CaseManager;
      break;
    case "businesses":
      model = Business;
      break;
    case "lawyers":
      model = Lawyer;
      break;
    case "privates":
      model = Private;
      break;
    case "groups":
      model = Group;
      break;
    default:
      return next(new AppError("something went wrong please try again!.", 500));
  }
  return model;
};

module.exports = { selectModel };
