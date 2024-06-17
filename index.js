import express from "express"
import "dotenv/config"
import cors from "cors"
import { conectarDB } from "./database/conexion.js";
import { getAutos } from "./controllers/getAutos.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequeridos.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postAuto } from "./controllers/postAuto.js";
import { deleteAuto } from "./controllers/deleteAuto.js";
import { putAuto } from "./controllers/putAuto.js";


const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
await conectarDB();

app.use(mostrarDatosRequest)

app.get("/", (req, res)=>{
    res.send("Api Autos")
})

app.get("/autos", getAutos)
app.post("/auto", postAuto)
app.delete("/auto/:id", deleteAuto)
app.put("/auto/:id", putAuto)

app.use(manejadorErrores)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
} )