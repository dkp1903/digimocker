const router = require('express').Router()
const verify = require('./verifyToken')
const Doc = require('../models/Doc')

router.post('/', verify, async (req, res) => {

    // Check if doc already exists
    const checkIfDocExists = await Doc.findOne({email: req.body.email, name: req.body.name})
    if(checkIfDocExists)
        return res.send('Document already exists')

    // Create Doc
    const doc = new Doc({
        name: req.body.name,
        email: req.body.email,
        url: req.body.url,
        identifier: req.body.identifier

    })

    // Error handling
    try {
        const savedDoc = await doc.save()
        console.log('savedDoc: ', savedDoc)
        res.send(savedDoc)

    } catch(err){
        res.send(err)
        res.sendStatus(400)
        console.error(err)
    }
})


module.exports = router
