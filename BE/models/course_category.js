"use strict";
const { Model } = require("sequelize");
const course = require("./course");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class Course_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsToMany(category, {
        through: Course_category,
        foreignKey: { allowNull: false, name: "course_id" },
      });
      category.belongsToMany(course, {
        through: Course_category,
        foreignKey: { allowNull: false, name: "category_id" },
      });
      Course_category.belongsTo(course);
      Course_category.belongsTo(category);
      course.hasMany(Course_category, {
        foreignKey: { name: "course_id", allowNull: false },
        onDelete: "CASCADE",
      });
      category.hasMany(ProductCategory, {
        foreignKey: { name: "category_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Course_category.init(
    {
      course_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course_category",
    }
  );
  return Course_category;
};
