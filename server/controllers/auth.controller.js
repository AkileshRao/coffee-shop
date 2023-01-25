const User = require("../db/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.config")

exports.login = (req, res) => {
    const { username, password, role } = req.body;
    User.findOne({ where: { username: username } }).then(user => {
        console.log(user);
        if (user) {
            bcrypt.compare(password, user.password).then(isFulfilled => {
                if (isFulfilled) {
                    const token = jwt.sign({ id: user.id }, authConfig.secret, {
                        expiresIn: "1d",
                    })
                    res.status(200).send({
                        status: "Success",
                        message: "User successfully logged in!",
                        token,
                        role
                    })
                } else {
                    res.status(401).send({
                        status: "Error",
                        message: "Invalid password!"
                    })
                }
            })
        } else {
            res.status(400).send({
                status: "Error",
                message: "User does not exist!"
            })
        }
    }).catch(err => {
        console.log(err);
    })
}

exports.register = async (req, res) => {
    await User.sync();
    const { email, username, password, role } = req.body;
    bcrypt.hash(password, 10).then(hashedPass => {
        const newUser = User.build({
            username, email, password: hashedPass, role
        }, { isNewRecord: true })

        newUser.save().then(result => {
            res.status(200).send({
                status: "Success",
                message: "User created successfully!"
            })
        })
    }).catch(err => {
        console.log(err);
        res.status(400).send({
            status: "Error",
            message: err
        })
    })
}