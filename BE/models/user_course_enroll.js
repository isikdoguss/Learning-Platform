"use strict";
const { Model } = require("sequelize");
// const user = require("./user");
// const course = require("./course");
module.exports = (sequelize, DataTypes) => {
  class User_course_enroll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association hereproduct.belongsToMany(category, { through: ProductCategory, foreignKey:{allowNull:false, name:'productId'}});
      models.User.belongsToMany(models.Course, {
        through: User_course_enroll,
        foreignKey: { allowNull: false, name: "studentId" },
      });
      models.Course.belongsToMany(models.User, {
        through: User_course_enroll,
        foreignKey: { allowNull: false, name: "courseId" },
      });
      // User_course_enroll.belongsTo(models.User);
      // User_course_enroll.belongsTo(models.Course);
      // models.User.hasMany(User_course_enroll, {
      //   foreignKey: { name: "studentId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
      // models.Course.hasMany(User_course_enroll, {
      //   foreignKey: { name: "courseId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
    }
  }
  User_course_enroll.init(
    {
      studentId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_course_enroll",
    }
  );
  return User_course_enroll;
};
