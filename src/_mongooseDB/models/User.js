const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    photo:{
        type: String
    } ,
    roleId:{
        type: String
    },
    isActive: {
        type:Boolean,
        default: true
    }
});

UserSchema.method('toJSON', function() {
    const { __v, password,isActive, _id, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  })

module.exports = model('User', UserSchema );