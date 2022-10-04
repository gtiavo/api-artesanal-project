const { getStyles } = require('../db/Styles');
const { getRoles } = require('../db/Role');

const whiteListStyles = async(value) => {

        const values = [];
        const styles = await getStyles();
        styles.forEach(style => values.push(style.name));

        if( !values.includes(value) ) throw new Error(`-${values}- son los estilos existentes`);
        return true;
};

const whiteListRole = async(value) => {

    const values = [];
    const rolesTotal = await getRoles();
    const roles = rolesTotal.filter( role => role.deletedAt !== true);
    roles.forEach(role => values.push(role.name));

    if( !values.includes(value) ) throw new Error(`-${values}- son los roles admitidos`);
    return true;

};



module.exports = {
    whiteListStyles,
    whiteListRole
}