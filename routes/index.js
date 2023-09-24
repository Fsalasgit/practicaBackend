const { getAllUsers , register, changeToAdmin} = require("../controllers/userController");

const router = require ("express").Router();


router.get("/", getAllUsers)
router.post("/registrar", register)
router.post("/admin/:id", changeToAdmin)

module.exports = router;