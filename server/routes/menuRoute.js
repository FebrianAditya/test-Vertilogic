const express = require("express")
const route = express.Router()
const MenuController = require("../controllers/menuController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

route.get("/", MenuController.getAllDataMenu)

route.use(authentication)
route.post("/", authorization, MenuController.createMenu)
route.delete("/", authorization, MenuController.deleteMenu)

module.exports = route