"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          first_name: "Doğuş",
          last_name: "Işık",
          email: "dogussisik@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "İlker",
          last_name: "Cankat",
          email: "ilkerC@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Berker",
          last_name: "Topaloğlu",
          email: "bTopal@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Someone",
          last_name: "Something",
          email: "somesome@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Kağan",
          last_name: "Demirhindi",
          email: "kDemirhindi@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "John",
          last_name: "Cena",
          email: "johnCena@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Senna",
          last_name: "Lucian",
          email: "sLucian@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "James",
          last_name: "Doe",
          email: "jamesdoe@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Mrs.",
          last_name: "Brown",
          email: "mrsBrown@gmail.com",
          password: "1234567",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
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
    await queryInterface.bulkDelete("user", null, {});
  },
};
