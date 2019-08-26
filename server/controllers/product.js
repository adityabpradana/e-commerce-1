const Product = require('../models/product')

class ProductController {
    static create(req, res, next) {
        const { name, price, stock } = req.body
        let image = null; 

        if(req.file){
            image = req.file.gcsUrl
        } else {
            next({ code: 400, message: 'Please add product image'})
        }

        Product.create({ name, price, stock, image })
            .then( data => {
                res.status(201).json(data)
            })
            .catch(next)
    }
    
    static findAll(req, res, next) {
        Product.find()
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const id = req.params.productId

        Product.findById(id)
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.productId

        Product.findByIdAndDelete(id)
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static updateOne(req, res, next) {
        const id = req.params.productId
        let update = {}

        req.body.name && (update.name = req.body.name);
        req.body.price && (update.price = req.body.price);
        req.body.stock && (update.stock = req.body.stock);
        req.file && (update.image = req.file.gcsUrl);

        Product.findByIdAndUpdate(id, update, { new: true, runValidators: true })
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)


    }
}

module.exports = ProductController