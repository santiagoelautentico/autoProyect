import { ModeloAuto } from "../database/models/ModeloAuto.js"
import { formatearFiltrosDB } from "../utils/functions.js"

export const getAutos = (req, res, next) => {
    const filtroModelo = formatearFiltrosDB(req.query.modelo)
    const filtroMarca = formatearFiltrosDB(req.query.marca)
    const filtroCondicion = formatearFiltrosDB(req.query.condicion)
    const filtroMotor = formatearFiltrosDB(req.query.motor)
    const filtroKilometros = formatearFiltrosDB(req.query.kilometros)
    const filtroColor = formatearFiltrosDB(req.query.color);
    const PapelesAlDia = formatearFiltrosDB(req.query.PapelesAlDia);
    const filtroPrecio = formatearFiltrosDB(req.query.precio);
    const filtroAño = formatearFiltrosDB(req.query.año);
    const filtroTipoDeCaja = formatearFiltrosDB(req.query.tipoDeCaja);
    const filtroCombustible = formatearFiltrosDB(req.query.combustible);

    const filtros = {}
    if (filtroModelo) filtros.modelo = filtroModelo;
    if (filtroMarca) filtros.marca = filtroMarca;
    if (filtroCondicion) filtros.condicion = filtroCondicion;
    if (filtroMotor) filtros.motor = filtroMotor;
    if (filtroKilometros) filtros.kilometros = filtroKilometros;
    if (filtroColor) filtros.color = filtroColor;
    if (PapelesAlDia) filtros.PapelesAlDia = PapelesAlDia;
    if (filtroPrecio) filtros.precio = filtroPrecio;
    if (filtroAño) filtros.año = filtroAño;
    if (filtroTipoDeCaja) filtros.tipoDeCaja = filtroTipoDeCaja;
    if (filtroCombustible) filtros.combustible = filtroCombustible;


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