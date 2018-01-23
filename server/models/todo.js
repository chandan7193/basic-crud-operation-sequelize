'use strict';
module.exports = function(sequelize, DataTypes) {
  var TODO = sequelize.define('TODO', {
    id:  {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
