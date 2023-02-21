const { Model, DataTypes, STRING } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}
Category.init(
  {
    id: {
      // We want our ID to be an integer, cant be null, a primary key and allow auto increments
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // We want our category names to be strings and cant be null
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
