import { Schema, model } from "mongoose";

const schemaAuto = new Schema({
    id: {type: Number, unique: true},
    marca: String,
    modelo: String,
    usado: Boolean,
    año: Number,
    color: String,
    precio: Number,
    imagen: String,
    planDePago: String,
    motor: String,
    velocidadMaxima: String,
    otrosDatos: String,
})

export const ModeloAuto = model("Auto", schemaAuto)