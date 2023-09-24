const mongoose = require("mongoose");

const dbConection = async () => {
    try{
        await mongoose.connect(process.env.DB_CONECTION, {
            dbName: "Comision49i",
            useNewUrlParser:true, // permite trabajar con nueva y vieja revision
            useUnifiedTopology: true
        })
        console.log("Base de datos conectada")
    } catch(error){
        console.log(error);
        process.exit(1) // cuando hay una falla en el proceso de datos la corta para no modificar o guardar cosas que no corresponde
    }
}

module.exports = dbConection