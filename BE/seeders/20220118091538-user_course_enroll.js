"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_course_enroll",
      [
        {
          student_id: 1,
          course_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 1,
          course_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 2,
          course_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 4,
          course_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_course_enroll", null, {});
  },
};
