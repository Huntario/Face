'use strict';
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
var userPicData = sequelize.define('userPicData', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
    type: Sequelize.STRING,
    unique: true
    },
    picPath: {
      type: Sequelize.STRING
    },
    anger: {
      type: Sequelize.BOOLEAN
    },
    angerConfidence: {
      type: Sequelize.INTEGER
    },
    disgust: {
      type: Sequelize.BOOLEAN
    },
    disgustConfidence: {
      type: Sequelize.INTEGER
    },
    fear: {
      type: Sequelize.BOOLEAN
    },
    fearConfidence: {
      type: Sequelize.INTEGER
    },
    happiness: {
      type: Sequelize.BOOLEAN
    },
    happinessConfidence: {
      type: Sequelize.INTEGER
    },
    sadness: {
      type: Sequelize.BOOLEAN
    },
    sadnessConfidence: {
      type: Sequelize.INTEGER
    },
    surprise: {
      type: Sequelize.BOOLEAN
    },
    surpriseConfidence: {
      type: Sequelize.INTEGER
    }
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