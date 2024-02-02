const mongoose = require('mongoose');

const datosSchema = new mongoose.Schema(
    {
        "nombre": {
            type: String,
            require: [
                true,
                'Hace falta brindar un nombre a la idea.'
            ]
        },
        "id_estado": {
            type: Number
        },
        "sg_estado": [
            {
                type: Number
            }
        ],
        "tipo": {
            type: String
        }
    }
);

module.exports = mongoose.model(
    "Datos",
    datosSchema
);