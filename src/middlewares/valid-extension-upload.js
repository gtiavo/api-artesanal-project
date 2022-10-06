const { BadRequestResponse } = require("../_HTTP-response/errors");


const validExtensions = (req,res,next) => {

    const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

    const court = req.files.file.name.split('.');
    const extension = court[ court.length - 1 ];

    if( !validExtensions.includes(extension)) throw new BadRequestResponse(`Invalid extension, valid extensions: ${validExtensions}`);

    next();
};

module.exports = validExtensions;