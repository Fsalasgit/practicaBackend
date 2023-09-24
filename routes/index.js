const { getAllUsers , register} = require("../controllers/userController");

const router = require ("express").Router();


router.get("/", getAllUsers)
router.post("/registrar", register)


module.exports = router;