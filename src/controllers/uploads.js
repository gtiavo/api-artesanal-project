const {asyncHandler} = require("../helpers");
const { upadateImageClouddinary } = require('../services');
const { OkResponse } = require("../_HTTP-response/successful");


const upadateImage = asyncHandler(async(req,res,next) => {

  const model =  await upadateImageClouddinary(req.params, req.files);
    new OkResponse(res,{model});

});


module.exports = {
    upadateImage
}