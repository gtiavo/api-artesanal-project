

const whitheListValue = (value, values) => {
        if( !values.includes(value) ) throw new Error(`-${values}- son los valores requeridos`)
        return true;
};



module.exports = {
    whitheListValue,
}