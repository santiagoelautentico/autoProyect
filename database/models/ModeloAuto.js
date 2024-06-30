import { Schema, model } from "mongoose";

const schemaAuto = new Schema({
  id: { type: Number, unique: true },
  marca: String,
  modelo: String,
  condicion: String,
  año: {type: Number},
  color: String,
  precio: {type: Number},
  imagen: String,
  planDePago: String,
  motor: String,
  puertas: {type: Number},
  Kilometros: {type: Number},
  NumeroDePlazas: {type: Number},
  PapelesAlDia: Boolean,
  tipoDeCaja: String,
  combustible: String,
  acercaDelAuto: String,
});

export const ModeloAuto = model("Auto", schemaAuto);


//algo
