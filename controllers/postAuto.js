import { ModeloAuto } from "../database/models/ModeloAuto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postAuto = async (req, res, next) => {
  const {
    marca,
    modelo,
    año,
    color,
    precio,
    imagen,
    planDePago,
    motor,
    usado,
    plataformaMaxima,
    otrosDatos,
  } = req.body;
  const nuevoAuto = new ModeloAuto();
  nuevoAuto.id = await obtenerProximoId(ModeloAuto);
  nuevoAuto.marca = marca;
  nuevoAuto.modelo = modelo;
  nuevoAuto.año = año;
  nuevoAuto.color = color;
  nuevoAuto.precio = precio;
  nuevoAuto.imagen = imagen;
  nuevoAuto.planDePago = planDePago;
  nuevoAuto.motor = motor;
  nuevoAuto.usado = usado;
  nuevoAuto.plataformaMaxima = plataformaMaxima;
  nuevoAuto.otrosDatos = otrosDatos;

  nuevoAuto.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
};
