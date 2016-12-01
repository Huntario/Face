'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {type: Sequelize.STRING, unique: true},
    link: DataTypes.STRING,
    date: DataTypes.DATE
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};