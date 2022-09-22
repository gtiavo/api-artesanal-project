const ModelsDB = require('./models/Mongoose');
const Style = require('../_mongooseDB/models/Style');
const { isValidObjectId } = require('mongoose');
const { NotFoundResponse } = require('../_HTTP-response/errors');

const styleCreate = async(data) => {

    data.name = data.name.toLowerCase();
    const { name, description } = data;

    const style = await ModelsDB.NewPost(Style, { name, description });
    await style.save();

    return style;

};

const getStyles = async() => {

    const styles = await ModelsDB.getAll(Style);
    return styles;

};

const oneStyle = async( dataId ) => {

    const {id} = dataId;
    let style;

    if(isValidObjectId(id)) style = await ModelsDB.getOne(Style, {_id: id});
    if(!style) style = await ModelsDB.getOne(Style, { name: id.toLowerCase().trim()});
    if(!style) throw new NotFoundResponse('Style not found');

    return style;
    
};

const styleEdit = async(dataId, data) => {

    data.name = data.name.toLowerCase();
    const { name, description } = data;
    const style = await oneStyle(dataId);
    const updatedStyle = await ModelsDB.updatePost(style, { name, description });

    return updatedStyle;

};

const removeStyle = async(dataId) => {

    const style = await oneStyle(dataId);
    await ModelsDB.delete(style, style.id);

};

module.exports = {
    styleCreate,
    getStyles,
    oneStyle,
    styleEdit,
    removeStyle
}