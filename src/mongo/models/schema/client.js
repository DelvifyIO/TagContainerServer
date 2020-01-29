import database from '../index';

let mongoose = require('mongoose');
let timestampPlugin = require('../plugins/timestamp');

let tags = new mongoose.Schema({
   tag: String,
});

let mapSchema = new mongoose.Schema({
    path: String,
    tags: [tags],
});

let clientSchema = new mongoose.Schema({
    name: String,
    website: String,
    maps: [mapSchema],
});

clientSchema.plugin(timestampPlugin);
const clientModel = database.model('Client', clientSchema);

export default clientModel;