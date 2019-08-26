const Cart = require('../../models/cart');
const Product = require('../../models/product');
const User = require('../../models/user');

module.exports = function(done) {
  if (process.env.NODE_ENV === 'test') {

    let jobs = [User.deleteMany({}), Product.deleteMany({}), Cart.deleteMany({})]

    Promise.all(jobs)
    .then(function(){
      done()
    })
    .catch(function(err){
      done(err)
    })
  }
};