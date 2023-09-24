

const getAllUsers = (req, res) =>{
    res.send({
        mensaje: "Todos los usuarios fueron encontrados correctamente"
    })
}

const register = (req, res) =>{
    res.send({
        mensaje: "Con esta funcion registramos un usuario",
        body: req.body
        
    })
}

module.exports = {
    getAllUsers,
    register
}   