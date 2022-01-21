"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user_course_enroll",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        studentId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "user",
            key: "id",
          },
        },
        courseId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "course",
            key: "id",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_course_enroll");
  },
};
