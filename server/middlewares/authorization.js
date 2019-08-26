const Cart = require('../models/cart');

module.exports = {
    authUser(req, res, next) {
        const id = req.params.cartId

        if(req.decoded.role == 'admin') {
            next()
        } else {
            Cart.findById(id)
                .then( data => {
                    if(data.customer == req.decoded._id){
                        next()
                    } else {
                        next({ code: 401, message: 'Not authorized'})
                    }
                })
                .catch(next)
        }

    },   
    authAdmin(req, res, next)  {
        if(req.decoded.role == 'admin') {
            next()
        } else {
            next({ code: 401, message: 'Not authorized'})
        }
    },        
};