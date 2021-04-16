'use strict';

module.exports = (sequelize, DataTypes) => {
    var Currency = sequelize.define('Currency', {
        code:{type: DataTypes.STRING,primaryKey: true},
        name: DataTypes.STRING,

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

    Currency.associate = function(model) {
        Currency.hasOne(model.Product, { constraints: false, foreignKey: 'currency_code' });
        Currency.hasOne(model.Order, { constraints: false, foreignKey: 'currency' });
    };

    return Currency;
};