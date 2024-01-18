const express = require('express');
const UsuariosModel = require('../models/usuariosModel');
const PendientesModel = require('../models/pendientesModel');
const moongose = require('mongoose');

const router = express.Router()
// PENDIENTES

//traer todos los pendientes
router.get("/", async (req, res)=>{
    try {
        const pendientes =
            await PendientesModel.find()
        if(pendientes.length >0 ){
            res.
            status(200).
            json({
                success:true,
                data: pendientes
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"Al parecer no hay pendientes..."
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



//traer pendientes por id
router.get("/:id", async (req, res)=>{
try {
    pendientesId = req.params.id
    if(!moongose.Types.ObjectId.isValid(pendientesId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador del pendiente es invalido."
        })  
    }else{

        const pendientes = 
        await    PendientesModel.findById(pendientesId)
        if(pendientes){
            res.
            status(200).
            json({
                success:true,
                data: pendientes
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`No hemos encontrado un pendiente con un identificador igual a: ${pendientesId}`
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



//crear un curso
router.post("/", async (req, res)=>{
    try {
        const newPendientes =
        await PendientesModel.create(req.body)

    res.json({
        success:true,
        data: newPendientes
    })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })      
    }

})


//modificar cursos cursos por id
router.put("/:id", async (req, res)=>{
    try {
        const pendientesId = req.params.id
        if(!moongose.Types.ObjectId.isValid(pendientesId)){
            res.status(500)
            .json({
                success: false,
                msg:"El identificador del pendiente es invalido."
            })  
        }else{
            const updPendientes= 
            await PendientesModel.findByIdAndUpdate(
                pendientesId,
                req.body,
                {
                    new: true
                }) 
            if(updPendientes){
                res.
                status(200).
                json({
                    success:true,
                    data: updPendientes
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un pendiente con un identificador igual a: ${pendientesId}`
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

//eliminar un curso

router.delete("/:id", async (req, res)=>{
try {
    const pendientesId = req.params.id
    if(!moongose.Types.ObjectId.isValid(pendientesId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador del pendiente es invalido."
        })  
    }else{
        const delPendientes= 
        await PendientesModel.findByIdAndDelete(
            pendientesId
            )
            if(delPendientes){
                res.json({
                    success:true,
                    data: delPendientes
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un pendiente con un identificador igual a: ${pendientesId}`
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
router.get("/usuario/:idUsuario", async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario;
        
        // Asegúrate de validar que idUsuario sea un ObjectId válido si es necesario

        const pendientes = await PendientesModel.find({ idUsuario: idUsuario });

        if (pendientes.length > 0) {
            res.status(200).json({
                success: true,
                data: pendientes
            });
        } else {
            res.status(400).json({
                success: false,
                message: `No hay pendientes para el usuario con id: ${idUsuario}`
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