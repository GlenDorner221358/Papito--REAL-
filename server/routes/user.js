const express = require('express')
const router = express()
const { User, validate } = require('../models/user')
const bcrypt = require("bcrypt")

// Get a user by their email
router.get("/api/user/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email })
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})


// Create a new user
router.post("/api/addUser", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        const user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(409)
            .send({ message: "User with given email already exist." })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPassword }).save()
        res.status(201).send({ message: "User Created succefully" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

//End
module.exports = router