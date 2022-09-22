const {asyncHandler }= require("../helpers");
const { styleCreate, getStyles, oneStyle, styleEdit, removeStyle } = require('../db');
const { CreatedResponse, OkResponse } = require('../_HTTP-response/successful');


const getAllStyles = asyncHandler(async(req,res,next) => {

    const styles = await getStyles();
    new OkResponse(res,styles);

}); 
const getOneStyle = asyncHandler(async(req,res,next) => {

    const style = await oneStyle(req.params);
    new OkResponse(res,style);

});
const newStyle = asyncHandler(async(req,res,next) => {

    const style = await styleCreate(req.body);
    new CreatedResponse(res,style,'Created Style');

});
const updateStyle = asyncHandler(async(req,res,next) => {

    await styleEdit(req.params, req.body);
    new OkResponse(res,[]);

});
const deleteStyle = asyncHandler(async(req,res,next) => {

    await removeStyle(req.params);
    new OkResponse(res,[]);

});

module.exports = {
    getAllStyles,
    getOneStyle,
    newStyle,
    updateStyle,
    deleteStyle
}