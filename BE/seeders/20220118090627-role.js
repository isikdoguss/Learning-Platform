"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          name: "Student",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Tutor",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role", null, {});
  },
};
