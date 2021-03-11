const router = require('express').Router()
const User = require('../models/User')
const { registerValidation, loginValidation } = require('../utils/validation')
const bcrypt = require('bcryptjs')

// Register route
router.post('/register', async (req, res) => {

    // Validate user input
    const { error } = registerValidation(req.body)
    if(error)
    {
        console.log('THs some bitch eror')
        return res.sendStatus(400).send(error.details[0].message)
    }
        

    // Check if user already exists
    const checkIfEmailExists = await User.findOne({email: req.body.email})
    if(checkIfEmailExists)
        return res.send('Email already exists')

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //const hashedPassword = req.body.password
    console.log('pwd: ', hashedPassword)
    // Create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    // Error handling
    try {
        //console.log(user)
        const savedUser = await user.save()
        console.log('savedUser: ', savedUser)
        res.send(savedUser)

    } catch(err){
        console.error(err)
        //res.sendStatus(400).send(err)
    }
})

// Login route

router.post('/login', async (req, res) => {
    // Validate user input
    const { error } = loginValidation(req.body)
    if(error)
        return res.sendStatus(400).send(error.details[0].message)
    // Checking to make sure user exists
    const userRegistered = await User.findOne({ email: req.body.email })
    if (!userRegistered) return res.sendStatus(400).send('Email not found')

    // Check password
    const validPassword = await bcrypt.compare(req.body.password, userRegistered.password)
    if(!validPassword) return res.sendStatus(400).send('Invalid password')

    res.send('User is logged in')


})
module.exports = router