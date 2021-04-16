'use strict';

module.exports = (sequelize, DataTypes) => {
    var Merchant = sequelize.define('Merchant', {
        id:{type: DataTypes.INTEGER,primaryKey: true},
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        api_key: DataTypes.STRING,
        name:DataTypes.STRING,
        address:DataTypes.STRING,
        telephone:DataTypes.STRING,
        whatsapp:DataTypes.STRING,
        country_code:DataTypes.STRING,
        contact_person:DataTypes.STRING,


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

    Merchant.associate = function(model) {
        Merchant.belongsTo(model.Country, {  constraints: false, foreignKey: 'country_code' });
        Merchant.hasMany(model.Engagement, { constraints: false, foreignKey: 'merchant_id' });
        Merchant.hasMany(model.Product,   {  constraints: false, foreignKey: 'merchant_id' });
    };

    return Merchant;
};