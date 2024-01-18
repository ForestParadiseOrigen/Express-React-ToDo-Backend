const mongoose = require('mongoose');


const usuariosSchema = new mongoose.Schema(
    {
        "nombres": {
            type: String,
            required: [
                true,
                "Nombres requeridos."
            ]
        },
        "email":{
            type: String,
            required: [
                true,
                "Email requerida."
            ]
        },
        "contrasena":{
            type: String,
            required: [
                true,
                "Contraseña requerida."
            ]
        },
        "fotoPerfil":{
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
    }
);

module.exports = mongoose.model(
    "Usuarios",
    usuariosSchema
);