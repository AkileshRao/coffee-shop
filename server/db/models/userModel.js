const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../dbInstance")

const User = sequelize.define("user", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        unique: {
            arg: true,
            message: "Username already taken!"
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: {
            arg: true,
            message: "Email already taken!"
        }
    },
    role: {
        type: DataTypes.ENUM("USER", "ADMIN"),
        defaultValue: "USER"
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    deletedAt: true,
})

module.exports = User