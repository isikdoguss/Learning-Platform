"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User_roles",
      [
        {
          userId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          roleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User_roles", null, {});
  },
};
