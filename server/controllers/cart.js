const Cart = require('../models/cart')

class CartController {
    static create(req, res, next) {
    const invoice = 'INV' + Date.now() + 'SS';
    const customer = req.decoded._id

        Cart.create({ invoice, customer })
            .then( data => {
                res.status(201).json(data)
            })
            .catch(next)
    }
    
    static findAll(req, res, next) {
        let filter = {}

        if(req.decoded.role != 'admin'){
            filter.customer = req.decoded._id
        }

        Cart.find(filter).populate('customer')
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const id = req.params.cartId;

        Cart.findById(id).populate('customer')
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static findActiveCart(req, res, next) {
        const customer = req.decoded._id;
        
        Cart.findOne({ customer , status: 'unpaid' })
            .then( data => {
                if(data == null){
                    const invoice = 'INV' + Date.now() + 'SS';

                    return Cart.create({ invoice, customer })       
                } else {
                    res.status(200).json(data)
                }
            })
            .then( data => {
                res.status(201).json(data)
            })
            .catch(next)
    }

    static deleteOne(req, res, next) {
        const id = req.params.cartId;

        Cart.findByIdAndDelete(id)
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static updateStatus(req, res, next) {
        const id = req.params.cartId;
        const status = req.body.status;

        Cart.findByIdAndUpdate(id, { $set: { status } }, { new: true })
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static addToCart(req, res, next) {
        const id = req.params.cartId;
        let products = {}
        
        products._id = req.body._id;
        Cart.findByIdAndUpdate(id, { $pull: {products} }, { new: true })
            .then( data => {
                products.name = req.body.name;
                products.quantity = req.body.quantity;
                products.price = req.body.price;
                return  Cart.findByIdAndUpdate(id, { $push: {products} }, { new: true })
            })
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)   

    }

    static removeFromCart(req, res, next) {
        const id = req.params.cartId;
        let products = {}
        
        products._id = req.body._id;
        
        Cart.findByIdAndUpdate(id, { $pull: {products} }, { new: true })
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = CartController