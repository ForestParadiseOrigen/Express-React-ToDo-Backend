const express = require('express');
const IdeasModel = require('../models/ideasModel');
const moongose = require('mongoose');

const router = express.Router()
// PENDIENTES

//traer todos los pendientes
router.get("/", async (req, res)=>{
    try {
        const ideas =
            await IdeasModel.find()
        if( ideas.length > 0 ){
            res.
            status(200).
            json({
                success:true,
                data: ideas
    })}else{
        res.
        status(400)
        .json({
            success:false,
            message:"Al parecer no hay ideas..."
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



//traer ideas por id
router.get("/:id", async (req, res)=>{
try {
    ideasId = req.params.id
    if(!moongose.Types.ObjectId.isValid(ideasId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador de la idea es invalido."
        })  
    }else{

        const pendientes = 
        await IdeasModel.findById(ideasId)
        if(pendientes){
            res.
            status(200).
            json({
                success:true,
                data: ideas
            })
        }else{
            res.
            status(400).
            json({
                success:false,
                menssage:`No hemos encontrado una idea con un identificador igual a: ${ideasId}`
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



//crear un idea
router.post("/", async (req, res)=>{
    try {
        const newIdeas =
        await IdeasModel.create(req.body)

    res.json({
        success:true,
        data: newIdeas
    })
    } catch (error) {
        res.status(400)
        .json({
            success:false,
            message:error.message
        })      
    }

})


//modificar  ideas por id
router.put("/:id", async (req, res)=>{
    try {
        const ideasId = req.params.id
        if(!moongose.Types.ObjectId.isValid(ideasId)){
            res.status(500)
            .json({
                success: false,
                msg:"El identificador de la idea es invalido."
            })  
        }else{
            const updIdeas= 
            await IdeasModel.findByIdAndUpdate(
                ideasId,
                req.body,
                {
                    new: true
                }) 
            if(updIdeas){
                res.
                status(200).
                json({
                    success:true,
                    data: updIdeas
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado una idea con un identificador igual a: ${ideasId}`
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

//eliminar una idea

router.delete("/:id", async (req, res)=>{
try {
    const ideasId = req.params.id
    if(!moongose.Types.ObjectId.isValid(ideasId)){
        res.status(500)
        .json({
            success: false,
            msg:"El identificador de la idea es invalido."
        })  
    }else{
        const delIdeas= 
        await IdeasModel.findByIdAndDelete(
            ideasId
            )
            if(delIdeas){
                res.json({
                    success:true,
                    data: delIdeas
                })
            }else{
                res.
                status(400).
                json({
                    success:false,
                    menssage:`No hemos encontrado un pendiente con un identificador igual a: ${ideasId}`
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

        const ideas = await PIdeasModel.find({ idIdeas: idIdeas });

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