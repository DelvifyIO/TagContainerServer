'use strict';

module.exports = (sequelize, DataTypes) => {
    var Engagement = sequelize.define('Engagement', {
        oid:{type: DataTypes.STRING,primaryKey: true},
        customer_id:DataTypes.STRING,
        merchant_id:DataTypes.STRING,
        membership: DataTypes.BOOLEAN,
        country_code:DataTypes.STRING,
        city:DataTypes.STRING,
        device:DataTypes.STRING,
        source:DataTypes.STRING,

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

    Engagement.associate = function(model) {
        Engagement.hasMany(model.Order, { constraints: false, foreignKey: 'oid' });
        Engagement.belongsTo(model.Merchant, {  constraints: false, foreignKey: 'merchant_id' });
        Engagement.belongsTo(model.Country, {  constraints: false, foreignKey: 'country_code' });

    };

    return Engagement;
};