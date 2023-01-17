const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const { sequelize } = require("./db/sequelizeInstance")
const User = require("./db/models/userModel")
const app = express()

const port = 3001;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let user;
    try {
        user = await User.findOne({ where: { username: username } })
    } catch (err) {
        console.log(err);
    }

    if (user) {
        const result = await bcrypt.compare(password, user.dataValues.password);
        if (result) {
            res.status(200).send({
                status: "Success",
                message: "User successfully logged in!"
            })
        } else {
            res.status(400).send({
                status: "Error",
                message: "Invalid password!"
            })
        }
    } else {
        res.status(400).send({
            status: "Error",
            message: "User does not exist!"
        })
    }
})

app.post("/register", async (req, res) => {
    await User.sync();
    const { email, username, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10)
    const newUser = User.build({
        username, email, password: hashedPass
    }, { isNewRecord: true })

    try {
        await newUser.save();
        res.status(200).send({
            status: "Success",
            message: "User created successfully!"
        })
    } catch (err) {
        res.status(400).send({
            status: "Error",
            message: err.parent.detail
        })
    }
})

app.listen(port, () => console.log("App running on port 3001"));