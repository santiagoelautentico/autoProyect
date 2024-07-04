import { ModeloAuto } from "../database/models/ModeloAuto.js";
import { obtenerProximoId } from "../utils/functions.js";
export const postAuto = async (req, res, next) => {
  const {
    marca,
    modelo,
    condicion,
    año,
    color,
    precio,
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    planDePago,
    motor,
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
  nuevoAuto.condicion = condicion;
  nuevoAuto.año = año;
  nuevoAuto.color = color;
  nuevoAuto.precio = precio;
  nuevoAuto.imagen = imagen;
  nuevoAuto.imagen2 = imagen2;
  nuevoAuto.imagen3 = imagen3;
  nuevoAuto.imagen4 = imagen4;
  nuevoAuto.imagen5 = imagen5;
  nuevoAuto.planDePago = planDePago;
  nuevoAuto.motor = motor;
  nuevoAuto.puertas = puertas;
  nuevoAuto.Kilometros = Kilometros;
  nuevoAuto.NumeroDePlazas = NumeroDePlazas;
  nuevoAuto.PapelesAlDia = PapelesAlDia;
  nuevoAuto.tipoDeCaja = tipoDeCaja;
  nuevoAuto.combustible = combustible;
  nuevoAuto.acercaDelAuto = acercaDelAuto;

  nuevoAuto
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
};
