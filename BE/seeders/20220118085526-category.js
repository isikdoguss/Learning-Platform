"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          name: "Yazılım Geliştirme",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "İşletme",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Finans ve Muhasebe",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tasarım",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Web Geliştirme",
          parentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mobil",
          parentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Oyun Geliştirme",
          parentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Girişimcilik",
          parentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "İletişim",
          parentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Defter Tutma",
          parentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sanal Para",
          parentId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kullanıcı Deneyimi",
          parentId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "İllüstrasyon",
          parentId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
