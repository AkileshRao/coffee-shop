const Coffee = require("../db/models/coffeeModel");


exports.createCoffee = async (req, res) => {
    await Coffee.sync()
    const { name, description, price } = req.body;
    const newCoffee = Coffee.build({ name, description, price })
    newCoffee.save().then(result => {
        res.status(200).send({
            status: "Success",
            message: "Coffee created successfully!"
        })
    }).catch(err => {
        res.status(400).send({
            status: "Error",
            message: "Something went wrong!",
            error: err
        })
    })
}

exports.getCoffee = (req, res) => {

}

exports.updateCoffee = (req, res) => {

}

exports.deleteCoffee = (req, res) => {

}

exports.getCoffees = (req, res) => {

}