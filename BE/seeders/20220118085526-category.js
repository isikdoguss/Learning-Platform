"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          name: "Yazılım Geliştirme",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "İşletme",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Finans ve Muhasebe",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Tasarım",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Web Geliştirme",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mobil",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Oyun Geliştirme",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Girişimcilik",
          parent_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "İletişim",
          parent_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Defter Tutma",
          parent_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sanal Para",
          parent_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Kullanıcı Deneyimi",
          parent_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "İllüstrasyon",
          parent_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
