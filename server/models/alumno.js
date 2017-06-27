var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Persona = require('./persona');

var AlumnoSchema = new Schema({
    _id: {type: mongoose.SchemaTypes.ObjectId},
    matricula: String,
    persona: {type:mongoose.SchemaTypes.ObjectId, ref:'Persona'},
    fecha_alta: Date,
    fecha_baja:Date,
    baja_tmp:Date,
    activo: Boolean,
    grado:Number,
    grupo:String,
},{collection:'alumno'});

module.exports = mongoose.model('Alumno', AlumnoSchema);

