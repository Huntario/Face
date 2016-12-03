'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var userPicData = sequelize.define('userpicdata', {
    username: DataTypes.STRING,
    picPath: DataTypes.TEXT,
    age_est:DataTypes.INTEGER,
    anger: DataTypes.INTEGER,
    disgust: DataTypes.INTEGER,
    fear: DataTypes.INTEGER,
    happiness: DataTypes.INTEGER,
    happiness: DataTypes.INTEGER,
    surprise: DataTypes.INTEGER,
    mood:DataTypes.STRING,
    mood_value:DataTypes.INTEGER

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userPicData;
};