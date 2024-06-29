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
    puertas,
    Kilometros,
    NumeroDePlazas,
    PapelesAlDia,
    tipoDeCaja,
    combustible,
    acercaDelAuto,
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
  nuevoAuto.puertas = puertas;
  nuevoAuto.Kilometros = Kilometros;
  nuevoAuto.NumeroDePlazas = NumeroDePlazas;
  nuevoAuto.PapelesAlDia = PapelesAlDia;
  nuevoAuto.tipoDeCaja = tipoDeCaja;
  nuevoAuto.combustible = combustible;
  nuevoAuto.acercaDelAuto = acercaDelAuto;

  nuevoAuto.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
};
