"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course_category",
      [
        {
          course_id: 1,
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          course_id: 2,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          course_id: 3,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
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
    await queryInterface.bulkDelete("course_category", null, {});
  },
};
