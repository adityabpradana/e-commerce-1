const { Schema, model, ObjectId } = require('mongoose')

const cartSchema = new Schema({
    invoice: {
        type: String,
        required: true,
    },
    products: [{ type: Object }],
    customer: {
        type: ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        enum: ['unpaid', 'paid', 'delivered'],
        default: 'unpaid',
    }
}, { timestamps: true })

module.exports = model('Cart', cartSchema)