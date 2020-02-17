"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProjectsComplete = exports.ProjectValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProjectValidator = function ProjectValidator(formatMessage) {
  return Yup.object().shape({
    name: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(5, formatMessage(_validation_translations.validationTranslations.min, {
      min: 5
    })),
    description: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(100, formatMessage(_validation_translations.validationTranslations.min, {
      min: 0
    })),
    date: Yup.object().nullable().required(formatMessage(_validation_translations.validationTranslations.required)),
    images: Yup.array().of(Yup.object().shape({
      name: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(5, formatMessage(_validation_translations.validationTranslations.min, {
        min: 5
      })),
      url: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).url()
    }))
  });
};

exports.ProjectValidator = ProjectValidator;

var validateProjectsComplete = function validateProjectsComplete(data) {
  try {
    Yup.object({
      projects: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateProjectsComplete = validateProjectsComplete;