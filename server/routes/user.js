const express = require('express')
const UserSchema = require('../models/user')
const router = express();

//Read All
router.get('/api/getUsers', async (req, res) => {
    const findUser = await UserSchema.find();
    res.json(findUser)
})

//Get Single
router.get('/api/users/:id', async (req, res) => {
    const findUsers = await UserSchema.findById(req.params.id);
    res.json(findUsers)
})

//Create
router.post('/api/addUser', async (req, res) => {
    const user = new UserSchema({ ...req.body });
    await user.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


module.exports = router