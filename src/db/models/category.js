'use strict';

module.exports = (sequelize, DataTypes) => {
    var Category = sequelize.define('Category', {
        id: {type: DataTypes.INTEGER,primaryKey: true},
        name: DataTypes.STRING,
        department_code: DataTypes.INTEGER,
        department_name: DataTypes.STRING,
        category_code: DataTypes.INTEGER,
        category_name: DataTypes.STRING,
        sub_cat_code: DataTypes.INTEGER,
        sub_cat_name: DataTypes.STRING,


        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
    });

    Category.associate = function(model) {
        Category.hasOne(model.Product, { constraints: false, foreignKey: 'category_code' });
        Category.hasOne(model.Order, { constraints: false, foreignKey: 'category_code' });
    };

    return Category;
};