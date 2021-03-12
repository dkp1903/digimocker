const router = require('express').Router()
const verify = require('./verifyToken')
const Doc = require('../models/Doc')

router.get('/', verify, async (req, res) => {
    // res.json({ 'docs': [
    //             {
    //                 'name': 'Aadhar',
    //                 'identifier': '12345678'
    //             },
    //             {
    //                 'name': 'PAN',
    //                 'identifier': '87654321'
    //             }
    //         ]
    // })
    try {
        const docs = await Doc.find({email: req.body.email})
        res.send(docs)
    } catch (err) {
        console.error(err)
    }
    
})

module.exports = router