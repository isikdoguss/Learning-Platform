"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "Student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tutor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
