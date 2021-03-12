const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.json({ 'docs': [
                {
                    'name': 'Aadhar',
                    'identifier': '12345678'
                },
                {
                    'name': 'PAN',
                    'identifier': '87654321'
                }
            ]
    })
})
module.exports = router