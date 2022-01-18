"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_course_enroll",
      [
        {
          id: 1,
          student_id: 1,
          course_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          student_id: 1,
          course_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          student_id: 2,
          course_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
