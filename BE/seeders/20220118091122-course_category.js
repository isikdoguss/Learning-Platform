"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course_category",
      [
        {
          courseId: 1,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 2,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 3,
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 4,
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course_category", null, {});
  },
};
