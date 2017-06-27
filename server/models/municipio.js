var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Entidad = require('./entidad');

var MunicipioSchema = new Schema({
    _id: {type: mongoose.SchemaTypes.ObjectId},
    CVE_ENT: { type: String, ref: 'Entidad' },
    CVE_MUN: Number,
    NOM_MUN: String,
}, {collection: 'municipio'});

module.exports = mongoose.model('Municipio', MunicipioSchema);