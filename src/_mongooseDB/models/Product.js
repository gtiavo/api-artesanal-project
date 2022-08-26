const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true,
        index: true,
        unique: true
    },
    style:{
        type: String
    },
    description:{
        type: String
    },
    photo:{
        type: String
    },
    deletedAt: {
        type: Boolean,
        default: false
    }
});

ProductSchema.method('toJSON', function() {
    const { __v, _id,deletedAt, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  });

module.exports = model('Product', ProductSchema );