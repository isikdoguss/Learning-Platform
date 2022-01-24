"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "course",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        tutorId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "user",
            key: "id",
          },
        },
        path: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        price: {
          allowNull: false,
          type: Sequelize.INTEGER,
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
        tablename: "Courses",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("course");
  },
};
