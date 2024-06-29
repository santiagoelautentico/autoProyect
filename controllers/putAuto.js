import { ModeloAuto } from "../database/models/ModeloAuto.js";

export const putAuto = (req, res, next) => {
  const idAuto = req.params.id;
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
  const datosNuevos = {};
  if (marca) datosNuevos.marca = marca;
  if (modelo) datosNuevos.modelo = modelo;
  if (año) datosNuevos.año = año;
  if (color) datosNuevos.color = color;
  if (precio) datosNuevos.precio = precio;
  if (imagen) datosNuevos.imagen = imagen;
  if (planDePago) datosNuevos.planDePago = planDePago;
  if (motor) datosNuevos.motor = motor;
  if (usado) datosNuevos.usado = usado;
  if (puertas) datosNuevos.puertas = puertas;
  if (Kilometros) datosNuevos.Kilometros = Kilometros;
  if (NumeroDePlazas) datosNuevos.NumeroDePlazas = NumeroDePlazas;
  if (PapelesAlDia) datosNuevos.PapelesAlDia = PapelesAlDia;
  if (tipoDeCaja) datosNuevos.vehiculo = tipoDeCaja;
  if (combustible) datosNuevos.combustible = combustible;
  if (acercaDelAuto) datosNuevos.acercaDelAuto = acercaDelAuto;

  ModeloAuto.updateOne({ id: idAuto }, datosNuevos)
    .then((data) => {
      if (data.matchedCount === 0) {
        throw new Error(`No existe ningun auto con el id ${idAuto}`);
      }
      res.json({
        message: `El auto con el id ${idAuto} modificado con exito`,
      });
    })
    .catch((error) => {
      next(error);
    });
};
