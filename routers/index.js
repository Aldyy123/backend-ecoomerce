const router = require('express').Router()
const userRouters = require('./user')
const productRouters = require('./product')
const googleRouters = require('./google')
const Controller = require('../controllers/category')
const historyRouters = require('./history')

router.use('/user', userRouters)
router.use('/auth', googleRouters)
router.use('/product', productRouters)
router.get('/category', Controller.category)
router.post('/category', Controller.createCategory)
router.use('/history', historyRouters)

module.exports = router