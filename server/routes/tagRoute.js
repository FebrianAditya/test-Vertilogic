const express = require("express")
const route = express.Router()
const TagController = require("../controllers/tagController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

route.get("/", TagController.getAllDataTags)

route.use(authentication)
route.post("/", authorization, TagController.createDataTags)

module.exports = route