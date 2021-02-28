const express = require("express")
const route = express.Router()
const userRoute = require("./userRoute")
const tagRoute = require("./tagRoute")
const vendorRoute = require("./vendorRoute")
const menuRoute = require("./menuRoute")

route.use("/user", userRoute)
route.use("/tag", tagRoute)
route.use("/vendor", vendorRoute)
route.use("/menu", menuRoute)

module.exports = route