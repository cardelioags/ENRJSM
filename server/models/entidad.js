var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntidadShema = new Schema({
    _id: Number,
    NOM_ENT: String
},{collection: 'entidad'})

module.exports = mongoose.model('Entidad', EntidadShema);