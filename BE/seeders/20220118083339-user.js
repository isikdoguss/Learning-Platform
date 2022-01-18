"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          first_name: "Doğuş",
          last_name: "Işık",
          email: "dogussisik@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: "İlker",
          last_name: "Cankat",
          email: "ilkerC@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          first_name: "Berker",
          last_name: "Topaloğlu",
          email: "bTopal@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          first_name: "Kağan",
          last_name: "Demirhindi",
          email: "kDemirhindi@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          first_name: "John",
          last_name: "Demirhindi",
          email: "kDemirhindi@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          first_name: "Kağan",
          last_name: "Demirhindi",
          email: "kDemirhindi@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          first_name: "Kağan",
          last_name: "Doe",
          email: "johndoe@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          first_name: "Mrs.",
          last_name: "Brown",
          email: "mrsBrown@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          first_name: "Lydia",
          last_name: "Johansonn",
          email: "lydiaj@gmail.com",
          password: "1234567",
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
