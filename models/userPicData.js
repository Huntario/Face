'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
var userPicData = sequelize.define('userPicData', {
    userPics: {type: Sequelize.STRING, unique: true},
    picLink: DataTypes.STRING,
    date: DataTypes.DATE,
    age_est:DataTypes.STRING,
    anger:DataTypes.STRING,
    disgust:DataTypes.STRING,
    fear:DataTypes.STRING,
    happiness:DataTypes.STRING,
    sadness:DataTypes.STRING,
    surprise:DataTypes.STRING,
  },{
    hooks:{
      beforeCreate: function() {
        console.log("Hey it looks like the create is about to happen, perhaps you could replace me with something more useful...someday.");
      },
      afterCreate: function() {
        console.log("Hey, it's looks like this thing got created, at least this hook thinks so.");
      }
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
return userPicData;
};