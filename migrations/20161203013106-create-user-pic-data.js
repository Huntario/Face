'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('userPicData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      picPath: {
        type: Sequelize.TEXT
      },
      anger: {
        type: Sequelize.INTEGER
      },
      disgust: {
        type: Sequelize.INTEGER
      },
      fear: {
        type: Sequelize.INTEGER
      },
      happiness: {
        type: Sequelize.INTEGER
      },
      sadness: {
        type: Sequelize.INTEGER
      },
      surprise: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('userPicData');
  }
};