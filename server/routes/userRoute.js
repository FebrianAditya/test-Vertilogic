const express = require("express")
const route = express.Router()
const UserController = require("../controllers/userController")

route.post("/registeradmin", UserController.registerAdmin)
route.post("/registersuperadmin", UserController.registerSuperAdmin)
route.post("/loginadmin", UserController.loginAdmin)
route.post("/loginsuperadmin", UserController.loginSuperAdmin)

module.exports = route