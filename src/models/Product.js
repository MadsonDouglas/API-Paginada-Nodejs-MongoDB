const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
ProductSchema.plugin(paginate)

mongoose.model('Product', ProductSchema)
module.exports = ProductSchema