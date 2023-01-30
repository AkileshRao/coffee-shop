const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../dbInstance")

const Coffee = sequelize.define("coffee", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
    },
    coffeeName: {
        type: DataTypes.STRING,
    },
    coffeeDescription: {
        type: DataTypes.STRING,
    },
    coffeePrice: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true,
    deletedAt: true,
})

module.exports = Coffee