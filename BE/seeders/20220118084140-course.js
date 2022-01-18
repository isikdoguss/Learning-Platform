"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course",
      [
        {
          name: "JS Crash Course",
          tutor_id: 1,
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "MVC Node.js",
          tutor_id: 2,
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Salesforce E-Commerce App",
          tutor_id: 2,
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Next JS vs. Nuxt JS",
          tutor_id: 9,
          path: "https://courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course", null, {});
  },
};
