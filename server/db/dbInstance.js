const { Sequelize } = require("sequelize")
const dbConfig = require("../config/db.config")

module.exports = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    pool: dbConfig.POOL,
    define: {
        "createdAt": "createdat",
        "updatedAt": "updatedat"
    }
})

