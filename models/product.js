'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: "AuthorId"
      })
      Product.belongsTo(models.Category, {
        foreignKey: "CategoryId"
      })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name tidak boleh null"
        },
        notEmpty: {
          msg: "Name harus diisi, tidak boleh kosong"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "description tidak boleh null"
        },
        notEmpty: {
          msg: "description harus diisi, tidak boleh kosong"
        }
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "price tidak boleh null"
        },
        notEmpty: {
          msg: "price harus diisi, tidak boleh kosong"
        },
        min: {
          args: 50000,
          msg: "Minimum price 50000",
        }
      }
    },
    stock: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    AuthorId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['Active', 'Inactive', 'Archived'],
      defaultValue: 'Active',
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};