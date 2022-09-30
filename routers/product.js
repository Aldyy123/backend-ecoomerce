const router = require('express').Router()
const Controller = require('../controllers/product')
const authorization = require('../middlewares/authorization')
const authentication = require('../middlewares/authentication')

router.get('/', Controller.read)
router.post('/', authentication, Controller.create)
router.get('/detail/:id', authentication, Controller.readDetail)
router.put('/put/:id', authorization, Controller.replaceProduct)
router.patch('/update/:id', authorization, Controller.modifyProduct)
router.delete('/delete/:id', authorization, Controller.delete)

module.exports = router