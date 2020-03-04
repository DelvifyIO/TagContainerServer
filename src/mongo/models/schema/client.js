import database from '../index';

let mongoose = require('mongoose');
let timestampPlugin = require('../plugins/timestamp');

let tagSchema = new mongoose.Schema({
    name: String,
    path: String,
    script: String,
    delay: Number,
});

let clientSchema = new mongoose.Schema({
    name: String,
    website: String,
    tags: [tagSchema],
});

clientSchema.plugin(timestampPlugin);
const clientModel = database.model('Client', clientSchema);

export default clientModel;