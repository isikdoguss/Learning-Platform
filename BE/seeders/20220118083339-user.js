"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Doğuş",
          lastName: "Işık",
          email: "dogussisik@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "İlker",
          lastName: "Cankat",
          email: "ilkerC@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Berker",
          lastName: "Topaloğlu",
          email: "bTopal@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Someone",
          lastName: "Something",
          email: "somesome@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Kağan",
          lastName: "Demirhindi",
          email: "kDemirhindi@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "John",
          lastName: "Cena",
          email: "johnCena@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Senna",
          lastName: "Lucian",
          email: "sLucian@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "James",
          lastName: "Doe",
          email: "jamesdoe@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mrs.",
          lastName: "Brown",
          email: "mrsBrown@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Lydia",
          lastName: "Johansonn",
          email: "lydiaj@gmail.com",
          password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
