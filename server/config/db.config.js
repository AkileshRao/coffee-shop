module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "password",
    DB: "coffeeshop",
    DIALECT: "postgres",
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}