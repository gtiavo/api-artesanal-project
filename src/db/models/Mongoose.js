

const Mongoose = {
    NewPost: async( db, data ) => {

        const post = new db( data );
        return post;
     
     },

     getOne: async( db, data ) => {
        
        const item = await db.findOne(data);
        return item;
        
     },

     getAll: async( db ) => {

      const data = await db.find();
      return data;

     },

     getPagination: async(db, dataPagination) => {

      const { limit = 10, offset = 0} = dataPagination;
      const data = await db.find().where('deletedAt').equals(false).limit(limit).skip(offset);
      return data;

     },

     updatePost: async( db, dataId, data ) => {

      const updatedData = await db.updateOne(dataId, data);
      return updatedData;

     }

}

module.exports = Mongoose;