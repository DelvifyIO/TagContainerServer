'use strict';

module.exports = (sequelize, DataTypes) => {
    var Country = sequelize.define('Country', {
        code:{type: DataTypes.STRING,primaryKey: true},
        name: DataTypes.STRING,
        continent:DataTypes.STRING,

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

    Country.associate = function(model) {
        Country.hasOne(model.Product, {   constraints: false, foreignKey: 'origin' });
        Country.hasOne(model.Merchant, {  constraints: false, foreignKey: 'country_code' });
        Country.hasOne(model.Engagement,{ constraints: false, foreignKey: 'country_code' });
    };

    return Country;
};