const express = require('express');
const RetosModel = require('../models/retosModel');
const moongose = require('mongoose');

const router = express.Router()
// PENDIENTES

//traer todos los pendientes
router.get("/", async (req, res)=>{
    try {
        const retos =
            await RetosModel.find()
        if( retos.length > 0 ){
            res.
            status(200).
            json({
                success:true,
                data: retos
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"Al parecer no hay retos..."
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



//traer retos por id
router.get("/:id", async (req, res)=>{
try {
    retosId = req.params.id
    if(!moongose.Types.ObjectId.isValid(retosId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador del reto es invalido."
        })  
    }else{

        const retosId = 
        await RetosModel.findById(retosId)
        if(retosId){
            res.
            status(200).
            json({
                success:true,
                data: retos
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`No hemos encontrado una idea con un identificador igual a: ${retosId}`
            })
        }
    }
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    })

}})



//crear un reto
router.post("/", async (req, res)=>{
    try {
        const newRetos =
        await RetosModel.create(req.body)

    res.json({
        success:true,
        data: newRetos
    })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })      
    }

})


//modificar reto por id
router.put("/:id", async (req, res)=>{
    try {
        const retosId = req.params.id
        if(!moongose.Types.ObjectId.isValid(retosId)){
            res.status(500)
            .json({
                success: false,
                msg:"El identificador del reto es invalido."
            })  
        }else{
            const updRetos= 
            await RetosModel.findByIdAndUpdate(
                retosId,
                req.body,
                {
                    new: true
                }) 
            if(updRetos){
                res.
                status(200).
                json({
                    success:true,
                    data: updRetos
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado una reto con un identificador igual a: ${retosId}`
                })
            }          
        }
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })  
    }
})

//eliminar una reto

router.delete("/:id", async (req, res)=>{
try {
    const retosId = req.params.id
    if(!moongose.Types.ObjectId.isValid(retosId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador de la reto es invalido."
        })  
    }else{
        const delRetos= 
        await RetosModel.findByIdAndDelete(
            retosId
            )
            if(delRetos){
                res.json({
                    success:true,
                    data: delRetos
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un pendiente con un identificador igual a: ${retosId}`
                })
            }
    }
} catch (error) {
    res.status(400)
    .json({
        success:false,
        message:error.message
    })    
}
})

// Ruta para obtener pendientes por idUsuario
router.get("/ideas/:idIdeas", async (req, res) => {
    try {
        const idIdeas = req.params.idIdeas;
        
        // Asegúrate de validar que idIdeas sea un ObjectId válido si es necesario

        const ideas = await PRetosModel.find({ idIdeas: idIdeas });

        if (pendientes.length > 0) {
            res.status(200).json({
                success: true,
                data: ideas
            });
        } else {
            res.status(400).json({
                success: false,
                message: `No hay pendientes para el usuario con id: ${idIdeas}`
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router