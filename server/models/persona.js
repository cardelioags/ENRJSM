var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre es requerido']},
    prim_apell: {type: String, required: [true, 'Al menos un apellido es requerido']},
    segu_apell: String,
    curp: {type: String, maxlength: [18, 'Error en CURP'], minlength: [18, 'Error en CURP'], required: [true, 'La CURP es requerida'], index: true, unique: true},
    entidad_nac: String,
    fecha_nac: Date,
    sexo: String,
    domicilio: {
        calle: String,
        ext: String,
        int: String,
        cve_entidad: Number,
        entidad: String,
        cve_municipio: Number,
        municipio: String,
        cve_localidad: Number,
        localidad: String,
        colonia: String,
        longitud: Number,
        latitud: Number     
    },
    contacto: {
        tel_fijo: Number,
        tel_movil: Number,
        email: String,
    }
});

module.exports = mongoose.model('Persona', PersonaSchema);