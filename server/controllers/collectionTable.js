const { CollectionTable, Menu } =  require("../models")

class collectionTable {

    static getAllData(req, res) {
        CollectionTable.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createData(req, res) {
        // Menu.findAll()
        //     .then(data => {

        //     })
        //     .catch(err => {

        //     })
    }

}

module.exports = collectionTable