"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "course",
      [
        {
          name: "JS Crash Course",
          tutorId: 1,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MVC Node.js",
          tutorId: 2,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salesforce E-Commerce App",
          tutorId: 2,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Next JS vs. Nuxt JS",
          tutorId: 9,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("course", null, {});
  },
};
