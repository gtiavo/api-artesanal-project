

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

      const currentPage = dataPagination && Number(dataPagination) > 0 ? Number(dataPagination) : 0;
      
      const limit = 3;
      
      const offset = currentPage * limit;
      
      const rowsTotals = await db.find().where('deletedAt').equals(false);
      const rows = await db.find().where('deletedAt').equals(false).limit(limit).skip(offset);
      const count = rowsTotals.length;

      const prevPage = currentPage - 1;

      const nextPage = currentPage + 1;

      const totalPages = Math.ceil(count / limit);
      
      return {rows, currentPage, prevPage, nextPage, totalPages};

     },

     getTotalsPaginations: async(db, dataPagination) => {

      const currentPage = dataPagination && Number(dataPagination) > 0 ? Number(dataPagination) : 0;
      
      const limit = 3;
      
      const offset = currentPage * limit;
      
      const rowsTotals = await db.find();
      const rows = await db.find().limit(limit).skip(offset);
      const count = rowsTotals.length;

      const prevPage = currentPage - 1;

      const nextPage = currentPage + 1;

      const totalPages = Math.ceil(count / limit);
      
      return {rows, currentPage, prevPage, nextPage, totalPages};

     },

     updatePost: async( db, dataId, data ) => {

      const updatedData = await db.updateOne(dataId, data);
      return updatedData;

     },

     insertAll: async(db, data) => {

      const newsPost = await db.insertMany(data);
      return newsPost;

     },

     deleteAll: async(db) => {

      const deleteData = await db.deleteMany();
      return deleteData;

     },

     delete: async(db, dataId ) => {

      const deleteData = await db.deleteOne({_id:dataId});
      return deleteData;

     }

}

module.exports = Mongoose;