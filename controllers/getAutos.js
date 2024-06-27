import { ModeloAuto } from "../database/models/ModeloAuto.js"
import { formatearFiltrosDB } from "../utils/functions.js"

export const getAutos = (req, res, next) => {
    const filtroModelo = formatearFiltrosDB(req.query.modelo)
    const filtroMarca = formatearFiltrosDB(req.query.marca)

    const filtros = {}
    if (filtroModelo) filtros.modelo = filtroModelo;
    if (filtroMarca) filtros.marca = filtroMarca;

    ModeloAuto.find(filtros)
        .then((autos) => {
            console.log("get autos =>", autos);
            if (autos.length === 0) {
                res.json([]);
            } else {
                res.json(autos);
            }
        })
        .catch((error) => {
            next(error);
        });
}