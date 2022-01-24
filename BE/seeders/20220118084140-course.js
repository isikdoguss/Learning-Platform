"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          name: "JS Crash Course",
          tutorId: 1,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          description:
            "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
          price: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MVC Node.js",
          tutorId: 2,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          description:
            "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
          price: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salesforce E-Commerce App",
          tutorId: 2,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          description:
            "Updated Jan 2022 - Want to pass the Salesforce Admin Exam? with a focused course including mock test and best practice?",
          price: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Next JS vs. Nuxt JS",
          tutorId: 9,
          path: "https:courseholic.com/wp-content/uploads/2021/08/javascript-course.jpg",
          description:
            "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!  ",
          price: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
