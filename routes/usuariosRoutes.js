const express = require('express');
const UsuariosModel = require('../models/usuariosModel');
const moongose = require('mongoose');

const router = express.Router()
// PENDIENTES

//traer todos los pendientes
router.get("/", async (req, res)=>{
    try {
        const usuarios =
            await UsuariosModel.find()
        if(usuarios.length >0 ){
            res.
            status(200).
            json({
                success:true,
                data: usuarios
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"Al parecer no hay usuarios..."
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



//traer usuarios por id
router.get("/:id", async (req, res)=>{
try {
    usuariosId = req.params.id
    if(!moongose.Types.ObjectId.isValid(usuariosId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador del usuario es invalido."
        })  
    }else{

        const usuarios = 
        await UsuariosModel.findById(usuariosId)
        if(usuarios){
            res.
            status(200).
            json({
                success:true,
                data: usuarios
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`No hemos encontrado un usuario con un identificador igual a: ${usuariosId}`
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



//crear un usuario
router.post("/", async (req, res)=>{
    try {
        const newUsuarios =
        await UsuariosModel.create(req.body)

    res.json({
        success:true,
        data: newUsuarios
    })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })      
    }

})


//modificar usuario por id
router.put("/:id", async (req, res)=>{
    try {
        const usuariosId = req.params.id
        if(!moongose.Types.ObjectId.isValid(usuariosId)){
            res.status(500)
            .json({
                success: false,
                msg:"El identificador del usuario es invalido."
            })  
        }else{
            const updUsuarios= 
            await UsuariosModel.findByIdAndUpdate(
                usuariosId,
                req.body,
                {
                    new: true
                }) 
            if(updUsuarios){
                res.
                status(200).
                json({
                    success:true,
                    data: updUsuarios
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un usuario con un identificador igual a: ${pendientesId}`
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

//eliminar un usuario

router.delete("/:id", async (req, res)=>{
try {
    const usuariosId = req.params.id
    if(!moongose.Types.ObjectId.isValid(usuariosId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador del usuario es invalido."
        })  
    }else{
        const delUsuarios= 
        await UsuariosModel.findByIdAndDelete(
            usuariosId
            )
            if(delUsuarios){
                res.json({
                    success:true,
                    data: delUsuarios
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un usuario con un identificador igual a: ${usuariosId}`
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

module.exports = router