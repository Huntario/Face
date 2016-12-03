'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {type: Sequelize.STRING, unique: false},
    link: DataTypes.TEXT,
    date: DataTypes.DATE 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};