const { getStyles } = require('../db/Styles');

const whitheListStyles = async(value) => {

        const values = [];
        const styles = await getStyles();
        styles.forEach(style => values.push(style.name));

        if( !values.includes(value) ) throw new Error(`-${values}- son los estilos existentes`);
        return true;
};



module.exports = {
    whitheListStyles,
}