"use strict";
const { Model } = require("sequelize");
// const course = require("./course");
// const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class Course_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Course.belongsToMany(models.Category, {
        through: Course_category,
        foreignKey: { allowNull: false, name: "courseId" },
      });
      models.Category.belongsToMany(models.Course, {
        through: Course_category,
        foreignKey: { allowNull: false, name: "categoryId" },
      });
      // Course_category.belongsTo(models.Course);
      // Course_category.belongsTo(models.Category);
      // models.Course.hasMany(Course_category, {
      //   foreignKey: { name: "courseId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
      // models.Category.hasMany(Course_category, {
      //   foreignKey: { name: "categoryId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
    }
  }
  Course_category.init(
    {
      courseId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course_category",
    }
  );
  return Course_category;
};
