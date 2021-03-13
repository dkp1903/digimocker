const router = require('express').Router()
const verify = require('./verifyToken')
const Doc = require('../models/Doc')

router.get('/', verify, async (req, res) => {
    
    try {
        const docs = await Doc.find({email: req.body.email})
        res.send(docs)
    } catch (err) {
        console.error(err)
    }
    
})
router.get('/:name', verify, async (req, res) => {
    
    try {
        const singleDoc = await Doc.find({name: req.params.name, email: req.body.email})
        res.send(singleDoc)
    } catch (err) {
        console.error(err)
    }
    
})

module.exports = router