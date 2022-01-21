"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_course_enroll",
      [
        {
          studentId: 1,
          courseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 1,
          courseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          courseId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          courseId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_course_enroll", null, {});
  },
};
