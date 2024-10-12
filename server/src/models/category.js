'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
        }
    }
    Category.init({
        code: DataTypes.STRING,
        value: DataTypes.STRING,
        header: DataTypes.STRING,
        subheader: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
};