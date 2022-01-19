"use strict";
const { Model } = require("sequelize");
const user = require("./user");
const course = require("./course");
module.exports = (sequelize, DataTypes) => {
  class User_course_enroll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association hereproduct.belongsToMany(category, { through: ProductCategory, foreignKey:{allowNull:false, name:'productId'}});
      user.belongsToMany(course, {
        through: User_course_enroll,
        foreignKey: { allowNull: false, name: "student_id" },
      });
      course.belongsToMany(user, {
        through: User_course_enroll,
        foreignKey: { allowNull: false, name: "course_id" },
      });
      User_course_enroll.belongsTo(user);
      User_course_enroll.belongsTo(course);
      user.hasMany(User_course_enroll, {
        foreignKey: { name: "student_id", allowNull: false },
        onDelete: "CASCADE",
      });
      course.hasMany(User_course_enroll, {
        foreignKey: { name: "course_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  User_course_enroll.init(
    {
      student_id: DataTypes.INTEGER,
      course_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_course_enroll",
    }
  );
  return User_course_enroll;
};
