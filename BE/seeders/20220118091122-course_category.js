"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course_category",
      [
        {
          id: 1,
          course_id: 1,
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          course_id: 2,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          course_id: 3,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          course_id: 4,
          category_id: 8,
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
