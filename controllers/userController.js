const User = require("../models/userSchema");

const getAllUsers = (req, res) =>{
    res.send({
        mensaje: "Todos los usuarios fueron encontrados correctamente"
    })
}

const register = async (req, res) =>{
   const {nombre, userName, password} = req.body;
   const user = await User.findOne({userName});

   try{
    if (user) {
        return res.status(400).json({
            mensaje: "El usuario ya existe",
            status: 400

        })
    }
    const newUser = new User({
        nombre, 
        userName,
        password
    });
    await newUser.save()
    res.status(201).json({
        mensaje: "Usuario creado exitosamente",
        newUser
    })
   } catch (error) {
    return res.status(500).jsaon({
        mensaje: "Hubo un error intentelo mas tarde",
        status: 500
    });
   }
}

const changeToAdmin = async (req, res) => {
    const { id } = req.params;
    
    try{
        const user = await User.findByIdAndUpdate(id, {rol:"admin"}, {new: true})
        if (!user){
            return res.status(404).json({
                mensaje: "usuario no encontrado",
                statu: 404
            })
        }


    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAllUsers,
    register,
    changeToAdmin
}   