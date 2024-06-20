import { ModeloAuto } from "../database/models/ModeloAuto.js";

export const getAutoById =(req, res, next)=>{
    const idAuto = req.params.id;
    ModeloAuto.findOne({id: idAuto})
    .then((data)=>{
        if(!data){
            throw new Error(`No existe ninguna mascota con el Id ${idAuto}`)
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        next(error)
    })

}