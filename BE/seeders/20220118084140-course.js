"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course",
      [
        {
          id: 1,
          name: "JS Crash Course",
          tutor_id: "1",
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "MVC Node.js",
          tutor_id: "2",
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Salesforce E-Commerce App",
          tutor_id: "2",
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "Next JS vs. Nuxt JS",
          tutor_id: "9",
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
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
