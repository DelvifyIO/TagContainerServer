
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Order = sequelize.define('Order', {
        pid: {type: DataTypes.STRING,primaryKey: true},
        oid: DataTypes.INTEGER,
        sku: DataTypes.STRING,
        category_code:DataTypes.STRING,
        price: DataTypes.FLOAT,
        currency: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        isRecommended:DataTypes.BOOLEAN,
        type:DataTypes.STRING,
        event_type:DataTypes.STRING,
        isPurchased:DataTypes.BOOLEAN,
        discount_source: DataTypes.STRING,
        discount: DataTypes.FLOAT,
        is_visual_search: DataTypes.BOOLEAN,
        from_product_detail: DataTypes.BOOLEAN,


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

    Order.associate = function(model) {
        Order.belongsTo(model.Engagement, { constraints: false,foreignKey: "oid"});
        Order.belongsTo(model.Product, { constraints: false,foreignKey: "sku"});
        Order.belongsTo(model.Category, { constraints: false,foreignKey: "category_code"});
        Order.belongsTo(model.Currency, { constraints: false,foreignKey: "currency"});
    };

    return Order;
};