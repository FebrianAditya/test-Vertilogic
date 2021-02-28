'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Menu)
    }
  };
  Vendor.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 128],
          msg: "Name Restaurant must contain at least 1 characters and maximum 128 characters"
        }
      }
    },
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};