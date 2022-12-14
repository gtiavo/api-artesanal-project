const { Schema, model } = require('mongoose');


const StyleSchema = new Schema({

    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    description: {
        type: String 
    },
    photo:{
        type: String
    }

});

StyleSchema.method('toJSON', function() {
    const { __v, _id, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  })

module.exports = model('Style', StyleSchema);