var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Entidad = require('./entidad');
const Municipio = require('./municipio');

var LocalidadSchema = new Schema({
    "CVE_LOC": Number,
    "CVE_ENT": {type:Number, ref:'Entidad'},
    "CVE_MUN": {type:Number, ref:'Municipio'},
    "NOM_LOC": String,
    "AMBITO": String,
    "LATITUD": Number,
    "LONGITUD": Number,
    "LAT_DEC": Number,
    "LON_DEC": Number,
    "ALTITUD": Number,
    "CVE_CARTA": String,
    "PLANO": String
}, {collection:'localidad'});

module.exports = mongoose.model('Localidad', LocalidadSchema);