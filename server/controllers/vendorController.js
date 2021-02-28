const { Vendor } = require("../models")

class VendorController {

    static getAlllDataVendors(req, res) {
        Vendor.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createVendor(req, res) {
        let inputData = {
            name: req.body.name,
            logo: req.body.logo
        }

        Vendor.create(inputData)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteDataVendor(req, res) {
            let id = req.params.id

            Vendor.destroy({
                where: {
                    id
                }
            })
                .then(data => {
                    if(data) {
                        res.status(200).json({ The_number_of_destroyed_rows: data})
                    }else {
                        res.status(400).json({ error: "not found"})
                    }
                })
                .catch(err => {
                    res.status(500).json(err)
                })
    }

}

module.exports = VendorController