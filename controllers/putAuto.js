import { ModeloAuto } from "../database/models/ModeloAuto.js";

export const putAuto = (req, res, next) => {
  const idAuto = req.params.id;
  // const nombre = req.body.nombre;
  // const tipo = req.body.tipo;
  // const raza = req.body.raza;
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
  const datosNuevos = {};
  // if(nombre) datosNuevos.nombre = nombre;
  // if(tipo) datosNuevos.tipo = tipo;
  // if(raza) datosNuevos.raza = raza;
  if (marca) datosNuevos.marca = marca;
  if (modelo) datosNuevos.modelo = modelo;
  if (año) datosNuevos.año = año;
  if (color) datosNuevos.color = color;
  if (precio) datosNuevos.precio = precio;
  if (imagen) datosNuevos.imagen = imagen;
  if (planDePago) datosNuevos.planDePago = planDePago;
  if (motor) datosNuevos.motor = motor;
  if (usado) datosNuevos.usado = usado;
  if (plataformaMaxima) datosNuevos.plataformaMaxima = plataformaMaxima;
  if (otrosDatos) datosNuevos.otrosDatos = otrosDatos;

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
