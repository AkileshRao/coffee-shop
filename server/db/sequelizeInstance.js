const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('coffeeshop', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        "createdAt": "createdat",
        "updatedAt": "updatedat"
    }
})

module.exports = {
    sequelize
}