const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
       type: String,
       enum: {
        values: ['admin', 'client', 'super-user'],
        messsage: '{VALUE} no es un role valido',
        required: true
       },
       default: 'client' 
    },
    isActive: {
        type:Boolean,
        default: true
    },
    isBanned: {
        type: Boolean,
        default: false
    }
});

UserSchema.method('toJSON', function() {
    const { __v, password, _id, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  })
  

module.exports = model('User', UserSchema );