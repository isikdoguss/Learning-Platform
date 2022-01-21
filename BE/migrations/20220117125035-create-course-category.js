"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "course_category",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        courseId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "course",
            key: "id",
          },
        },
        categoryId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "category",
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
    await queryInterface.dropTable("course_category");
  },
};
