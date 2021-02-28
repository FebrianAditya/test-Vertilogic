const { User } = require("../models")

function authorization(req, res, next) {
    // let role = req.dataUser.role
    let id = req.dataUser.id

    User.findByPk(id)
        .then(data => {
            if(data.role === "superadmin") {
                next()
            }else {
                res.status(400).json({ error: "You dont have permission" })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        });

}

module.exports = authorization