'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename  = path.basename(__filename); // module.filename
const config    = require(__dirname + './../config/config.js');
const db        = {};

const sequelize  = new Sequelize(
    config.database,
    config.username,
    config.password,
    { host: config.host, dialect: config.dialect },
);


fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;