'use strict';
module.exports = function(sequelize, DataTypes) {
  var TODO = sequelize.define('TODO', {
    id: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TODO;
};