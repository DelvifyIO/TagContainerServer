
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
        sku: {type: DataTypes.STRING},
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        description: DataTypes.STRING,
        category_code:DataTypes.STRING,
        unit_of_measure: DataTypes.STRING,
        qnty: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        image_url: DataTypes.STRING,
        product_url: DataTypes.STRING,
        currency_code: DataTypes.STRING,
        origin:DataTypes.STRING,
        color : DataTypes.STRING,
        composition:DataTypes.STRING,
        merchant_id:DataTypes.STRING,


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

    Product.associate = function(model) {
        Product.hasOne(model.Order, { constraints: false,foreignKey: "sku" });
        Product.belongsTo(model.Category, { constraints: false,foreignKey: "category_code"});
        Product.belongsTo(model.Currency, { constraints: false,foreignKey: "currency_code"});
        Product.belongsTo(model.Country, { constraints: false,foreignKey: "origin"});
        Product.belongsTo(model.Merchant, { constraints: false,foreignKey: "merchant_id"});
    };

    return Product;
};