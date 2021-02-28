const { Menu } = require("../models")

class MenuController {

    static getAllDataMenu(req,res) {
        Menu.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createMenu(req, res) {
        let inputData = {
            foodName: req.body.foodName,
            VendorId: req.body.VendorId
        }

        Menu.create(inputData)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteMenu(req, res) {
        let id = req.params.id

        Menu.destroy({
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

module.exports = MenuController