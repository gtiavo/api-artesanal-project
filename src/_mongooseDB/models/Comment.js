const { Schema, model } = require('mongoose');


const CommentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String
    },
    deletedAt: {
        type: Boolean,
        default: false
    },

},{timestamps: true});

CommentSchema.method('toJSON', function() {
    const { __v, _id,deletedAt, ...object } =  this.toObject();
  
    object.id = _id;
    return object;
  });

module.exports = model('Comment', CommentSchema);