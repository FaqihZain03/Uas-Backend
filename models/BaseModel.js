// models/BaseModel.js
const { Model } = require('sequelize');

class BaseModel extends Model {
  static init(attributes, options) {
    super.init(attributes, { ...options, sequelize });
  }
}

module.exports = BaseModel;
