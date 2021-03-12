const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token)
        res.sendStatus(401)//.send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.TOKEN)
        req.user = verified
        next()
    }catch(err) {
        res.sendStatus(400)//.send('Invalid token')
    }
}