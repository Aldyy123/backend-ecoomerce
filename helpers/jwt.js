const jwt = require('jsonwebtoken')


const createToken = (payload) => {
    try {
        return jwt.sign(payload, process.env.token_key)
    } catch (error) {
        return error
    }
}
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.token_key)
    } catch (error) {
        return error
    }
}

module.exports = {
    createToken,
    verifyToken
}