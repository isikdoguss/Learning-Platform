"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          id: 1,
          name: "Student",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Tutor",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
