'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CollectionTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      MenuId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Menus",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tags",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      note: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CollectionTables');
  }
};