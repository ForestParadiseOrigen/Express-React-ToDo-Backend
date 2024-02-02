const express = require('express');
const DatosModel = require('../models/datosModel');
const moongose = require('mongoose');

const router = express.Router()
// PENDIENTES

//traer todos los pendientes
router.get("/", async (req, res)=>{
    try {
        const datos =
            await DatosModel.find()
        if( datos.length > 0 ){
            res.
            status(200).
            json({
                success:true,
                data: datos
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"Al parecer no hay datos..."
        })
    }
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })
    }

})




module.exports = router