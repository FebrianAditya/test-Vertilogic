'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.Vendor)
      Menu.belongsToMany(models.Tag, {through: "CollectionTables"})
      Menu.belongsToMany(models.User, {through: "CollectionTables"})
    }
  };
  Menu.init({
    foodName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Food name cannot empty"
        }
      }
    },
    VendorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};

// Associate done tinggal bycrptjs