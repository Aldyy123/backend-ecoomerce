const { Product, Category, User } = require('../models')
const historyController = require('./history')

class Controller {
    static async read(req, res, next) {
        try {
            let product = await Product.findAll({
                include: [Category, User]
            })
            return res.status(200).json(product)

        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        let body = req.body
        try {
            let data = await Product.create({ ...body, AuthorId: req.user.id })
            const history = await historyController.newHistory(req.user.id, data.description, `new entity with ${data.id} created`)
            if (history.name === "Error") throw { message: 'History failed' }
            return res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req, res, next) {
        try {
            let { id } = req.params
            let data = await Product.findByPk(+id)
            if (!data) {
                throw { name: 'data not found' }
            }
            await Product.destroy({ where: { id } })
            const history = await historyController.newHistory(req.user.id, data.description || 'Data deleted', `new entity with ${data.id} deleted`)
            if (history.name === "Error") throw { message: 'History failed' }
            res.status(200).json({ message: `id ${id} success to delete` })

        } catch (error) {
            next(error)
        }
    }
    static async readDetail(req, res, next) {
        try {
            let { id } = req.params
            let data = await Product.findByPk(+id, {
                include: [Category, User]
            })
            if (!data) {
                throw { name: 'data not found' }
            }
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async replaceProduct(req, res, next) {
        try {
            if(req.body.status){
                throw {message: "Sorry can't replace status"}
            }
            const product = await Product.update({ ...req.body }, {
                where: {
                    id: req.params.id
                }
            });
            if (product[0] === 0) throw { message: 'Product Not found' }
            const history = await historyController.newHistory(
                req.user.id,
                req.body.description || 'Update product',
                `entity with ${req.params.id} updated`
            )

            if (history.name === 'Error') throw { message: 'Error create history' }
            return res.status(200).json({ message: 'Data has been updated successfully' })
        } catch (error) {
            next(error)
        }
    }

    static async modifyProduct(req, res, next) {
        try {
            if (!req.body.status) throw { message: "Status must be filled" }
            const findOneProduct = await Product.findOne({ where: { id: req.params.id } })
            const product = await Product.update({ status: req.body.status }, {
                where: {
                    id: req.params.id
                },
                returning: true
            });
            if (product[0] === 0) throw { message: 'Product Not found' }
            const history = await historyController.newHistory(
                req.user.id,
                req.body.description || 'Update product',
                `entity with ${product[1][0].dataValues.id} status has been updated from ${findOneProduct.status} into ${product[1][0].dataValues.status}`
            )

            if (history.name === 'Error') throw { message: 'Error create history' }
            res.status(200).json({ message: 'Product updated successfully' })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller