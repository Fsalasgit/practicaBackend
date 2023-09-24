//importa express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require ("./routes")

const app = express()

//midlewares
app.use(cors()); //permite el acceso a los recursos de la aplicaciones desde origenes cruzado o sea desde una fuente externa por ejemplo desde otro dominio
app.options('*', cors()) // include before other routes
app.use(express.json())
app.use(express.urlencoded({extended: false})) //se utiliza para analizar las soliciudes entrantes con datos decodificado en la url. ej: formulaeio x-www.form-urlebcided
app.use(morgan("dev"))

app.use("/", router);

//al ultimo
port= 8080;

app.listen(port , ()=> {
    console.log("El servidor esta funcionando en el puerto 123", port)
})