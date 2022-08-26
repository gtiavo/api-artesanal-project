

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

     }

}

module.exports = Mongoose;