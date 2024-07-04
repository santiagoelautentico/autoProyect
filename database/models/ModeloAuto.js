import { Schema, model } from "mongoose";

const schemaAuto = new Schema({
  id: { type: Number, unique: true },
  marca: String,
  modelo: String,
  condicion: Boolean,
  año: Number,
  color: String,
  precio: Number,
  imagen: String,
  imagen2: String,
  imagen3: String,
  imagen4: String,
  imagen5: String,
  planDePago: String,
  motor: String,
  puertas: Number,
  Kilometros: Number,
  NumeroDePlazas: Number,
  PapelesAlDia: Boolean,
  tipoDeCaja: String,
  combustible: String,
  acercaDelAuto: String,
});

export const ModeloAuto = model("Auto", schemaAuto);

