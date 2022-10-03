const { Schema, model } = require('mongoose');

const RoleSchema = new Schema({

   name: { type: String, required: true, unique: true, index: true },
   description: { type: String },
   deletedAt:{ type: Boolean, default: false} 

});

RoleSchema.method('toJSON', function() {
    const { __v, _id, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  });

  module.exports = model('Role', RoleSchema);