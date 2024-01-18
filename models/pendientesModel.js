const mongoose = require('mongoose');

const pendientesSchema = new mongoose.Schema(
    {
        "titulo": {
            type: String,
            required: [
                "Nombre requerido."
            ]
        },
        "estado":{
            type: Boolean
        },
        "idUsuario":{
            type: String,
            required: [
                "Id del usuario requerido"
            ]
        }
    }
);

module.exports = mongoose.model(
    "Pendientes",
    pendientesSchema
);