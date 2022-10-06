const { oneProduct, oneUser, oneStyle } = require('../db');
const { BadRequestResponse, NotFoundResponse } = require('../_HTTP-response/errors');
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);


const upadateImageClouddinary = async( dataParams, courtFile ) => {

    const {  collection } = dataParams;
    let model;

    switch (collection) {
        case 'users':
            model = await oneUser(dataParams);
            break;
        case 'products':
            model = await oneProduct(dataParams);
            break;
        case 'styles':
            model = await oneStyle(dataParams);
            break;
    
        default:
            throw new NotFoundResponse('Page not found');
    }

    if( model.photo ) {
        const nameArr = model.photo.split('/');
        const name = nameArr[ nameArr.length - 1 ];
        const [ public_id ] = name.split('.');
            cloudinary.uploader.destroy(public_id);
    }

    const { tempFilePath } = courtFile.file;
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
    model.photo = secure_url;
    await model.save();

    return model;
};

module.exports = { upadateImageClouddinary };

