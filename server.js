const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const conectarDB = require('./config/db')
const cors = require('cors');

//dependencias de rutas
const pendientesRoutes = require('./routes/pendientesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes')


//vincular el archivo .env
dotenv.config(
    {path:'./config/.env'}
)

//CONECTAR A DB
conectarDB()

//construir objeto app
const app=express()

//confirmar que le llegara informacion json
app.use(express.json())
app.use(cors({
    origin:"*"
}))

//conectar las rutas al objeto app
app.use('/server/todoparadise/pendientes',
        pendientesRoutes);

app.use('/server/todoparadise/usuarios',
        usuariosRoutes);

//un puerto de ejecucion
app.listen(process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgWhite.blue.bold)
})