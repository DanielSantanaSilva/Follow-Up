"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stories extends Model {
    static associate(models) {}
  }
  Stories.init(
    {
      userId: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      impressions: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stories",
    }
  );
  return Stories;
};
