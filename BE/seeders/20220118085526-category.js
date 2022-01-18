"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          id: 1,
          name: "Yazılım Geliştirme",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "İşletme",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Finans ve Muhasebe",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "Tasarım",
          parent_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: "Web Geliştirme",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: "Mobil",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: "Oyun Geliştirme",
          parent_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: "Girişimcilik",
          parent_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: "İletişim",
          parent_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: "Defter Tutma",
          parent_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          name: "Sanal Para",
          parent_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          name: "Kullanıcı Deneyimi",
          parent_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
