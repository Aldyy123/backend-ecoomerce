const router = require('express').Router()
const { callbackAuth, getGoogleAuthURL } = require('../providers/google')

router.get('/google', (req, res) => {
    res.redirect(getGoogleAuthURL())
})
router.get('/google/callback', callbackAuth)

module.exports = router