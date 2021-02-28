const { Tag } = require("../models")

class TagController {

    static getAllDataTags(req, res) {
        Tag.findAll()
            .then((data) => {
                res.status(200).json(data)    
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    }

    static createDataTags(req, res) {
        let name = req.body.name
        let inputData = {
            name
        }

        Tag.create(inputData)
            .then(data => {
                console.log(data);
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = TagController