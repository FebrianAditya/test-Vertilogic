const { verifyToken } = require("../helpers/generateAndVerifyToken")
const { User } = require("../models")

function authentication(req, res, next) {
    let access_token = req.headers.access_token

    try {
        let decoded = verifyToken(access_token)

        // console.log(decoded);
        // console.log("--------");

        if(!decoded) {
            res.status(401).json({message: "You must have account"})
        }else {
            let email = decoded.email
            let id = decoded.id
            req.dataUser = decoded
            
            User.findOne({
                where: {
                    email,
                    id
                }
            })
                .then(data => {
                    if(data) {
                        next()
                    }else {
                        res.status(401).json({ error: "You must have account" })
                    }
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }

}

module.exports = authentication