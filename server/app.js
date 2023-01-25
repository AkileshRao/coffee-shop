const express = require("express")
const cors = require("cors")
const User = require("./db/models/userModel")
const authController = require("./controllers/auth.controller")
const app = express()

const port = 3001;

app.use(cors())
app.use(express.json())

app.post("/login", authController.login)
app.post("/register", authController.register)

app.listen(port, () => console.log("App running on port 3001"));