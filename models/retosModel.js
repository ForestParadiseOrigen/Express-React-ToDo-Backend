const mongoose = require('mongoose');

const retosSchema = new mongoose.Schema(
    {
        "titulo": {
            type: String,
            require: [
                true,
                'Este reto debe tener un titulo'
            ]
        },
        "autor": {
            type: String,
            require: [
                true,
                'Este reto debe tener un autor'
            ]
        },
        'color': {
            type: String,
            default: '#71717a',
            enum: [
                '#71717a', // zinc-500
                '#ef4444', // red-500
                '#3b82f6', // blue-500
                '#f97316' // orange-500
            ]
        },
        "conexiones": {
            "objetivo": {
                type: String
            },
            'tipo': {
                type: String,
                default: 'smoothstep',
                enum:[
                    'smoothstep', 
                    'straight', 
                    'simplebezier'
                ]
            }
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
            type: String,
            default: 'reto'
        }
    }
);

module.exports = mongoose.model(
    "Retos",
    retosSchema
);