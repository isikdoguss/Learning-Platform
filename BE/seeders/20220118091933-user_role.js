"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_role",
      [
        {
          user_id: 1,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 7,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 8,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 9,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 10,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_role", null, {});
  },
};
