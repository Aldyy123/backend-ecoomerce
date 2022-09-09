const {Product, Category, User} = require('../models')

class Controller {
    static async category(req,res,next){
        try {
            const categories = await Category.findAll({attributes: ["id", "name"]})
            res.status(200).json(categories)
        } catch (error) {
            next(error)
            console.log(error, 'erroorrrrr');
        }
    }
    static async createCategory(req,res, next){
        try {
            const body = {
                ...req.body
            }
            const createCategories = await Category.create(body)
            res.status(200).json(createCategories)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller