import { ModeloAuto } from "../database/models/ModeloAuto.js";

export const deleteAuto =(req, res, next) =>{
    const idAuto = req.params.id;
    ModeloAuto.deleteOne({id: idAuto})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ningun auto con el id: ${idAuto}`)
        }else{
            res.json({
                message: `El auto con el id: ${idAuto} eliminado con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}