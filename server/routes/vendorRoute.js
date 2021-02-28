const express = require("express")
const route = express.Router()
const VendorController = require("../controllers/vendorController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

route.get("/", VendorController.getAlllDataVendors)

route.use(authentication)
route.post("/", authorization, VendorController.createVendor)
route.delete("/", authorization, VendorController.deleteDataVendor)

module.exports = route