const {asyncHandler} = require("../helpers");
const {initialSeed} = require('../db');
const { OkResponse } = require('../_HTTP-response/successful');


const runSeed = asyncHandler( async(req,res,next) => {
    await initialSeed();
    new OkResponse(res, [], 'SEED successful');
});


module.exports = {
    runSeed
}