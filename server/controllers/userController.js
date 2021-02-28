const { User } = require("../models")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../helpers/generateAndVerifyToken")

class UserController {

    static registerAdmin(req, res) { 
        let inputData = {
            name: req.body.name,
            email: req.body.email,
            email_verified: new Date(),
            password: req.body.password,
            role: "admin"
        }

        User.create(inputData)
            .then(data => {
                res.status(201).json({ name: data.name, email: data.email, role: data.role })
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static registerSuperAdmin(req, res) {
        let inputData = {
            name: req.body.name,
            email: req.body.email,
            email_verified: new Date(),
            password: req.body.password,
            role: "superadmin"
        }

        User.create(inputData)
            .then(data => {
                res.status(201).json({ name: data.name, email: data.email, role: data.role })
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static loginAdmin(req, res) {
        let email = req.body.email
        let password = req.body.password
        let role = "admin"

        User.findOne({
            where: {
                email,
                role
            }
        })
            .then(data => {
                if(data) {
                    let passwordInDatabase = data.password
                    if(bcrypt.compareSync(password, passwordInDatabase)) {
                        let access_token = generateToken({ name: data.name, email: data.email, id: data.id, role: data.role })
                        console.log(access_token);
                        res.status(200).json({ access_token: access_token})
                    }else {
                        res.status(400).json({ message: "Password/Email Ivalid"})
                    }
                }else {
                    res.status(400).json({ message: "Password/Email INvalid"})
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static loginSuperAdmin(req, res) {
        let email = req.body.email
        let password = req.body.password
        let role = "superadmin"

        User.findOne({
            where: {
                email,
                role
            }
        })
            .then(data => {
                if(data) {
                    let passwordInDatabase = data.password
                    if(bcrypt.compareSync(password, passwordInDatabase)) {
                        let access_token = generateToken({ name: data.name, email: data.email, id: data.id, role: data.role })
                        res.status(200).json({ access_toke: access_token})
                    }else {
                        res.status(400).json({ message: "Password/Email Invalid"})
                    }
                }else {
                    res.status(400).json({ message: "Password/Email Invalid"})
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = UserController