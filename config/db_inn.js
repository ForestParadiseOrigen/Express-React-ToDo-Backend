const mongoose = require('mongoose');

const conectarbd_inn = async() => {
    // llamamos a la dependencia de mongoose
    await mongoose.connect(process.env.MONGO_URL_INN);
    console.log("Conexion estable".bgWhite.blue);
}
module.exports = conectarbd_inn