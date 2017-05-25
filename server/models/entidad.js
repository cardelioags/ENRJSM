var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntidadSchema = new Schema({
    "_id": Number,
    "nombre": String,
    "municipios": [
        {
            "_id": Schema.Types.ObjectId,
            "entidad": Number,
            "cve_mun": Number,
            "nombre": String,
            "localidades": [
                {
                    "_id" : Schema.Types.ObjectId,
                    "entidad": Number,
                    "municipio": Number,
                    "cve_loc": Number,
                    "nombre": String,
                    "ambito": String,
                    "latitud": Number,
                    "longitud": Number,
                    "lat_dec": Number,
                    "lon_dec": Number,
                    "altitud": Number,
                    "cve_carta": String,
                    "plano": String
                }
            ]
        }
    ]
}, { collection: "entidad" })

module.exports = mongoose.model("Entidad", EntidadSchema);