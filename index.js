//importa express
const express = require("express");
const cors = require ("cors")
const morgan = require ("morgan")

const app = express()

app.use(cors())
app.options('*', cors()) // include before other routes
app.use(express.json())

console.log("app", app);

app.get("/", (req, res)=>{
    res.send({

        mensaje: "hola a todos desde el bakend"
    }
        
    )

})

app.post("/", (req,res) => {
    const {nombre} = req.body
    console.log(res)
    res.send({
        nombre
    })
})






//al ultimo
port= 8080;

app.listen(port , ()=> {
    console.log("El servidor esta funcionando en el puerto ", port)
})