var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = new Schema({
    nombre: String,
    prim_apell: String,
    segu_apell: String,
    curp: String,
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
    }
});

module.exports = mongoose.model('Persona', PersonaSchema);