const {hashSync} = require('bcryptjs');

const users = [
    {
    
    firstName: "Admin",
    lastName: "One",
    email: "adminone@google.com",
    password: hashSync('123456', 10),
    roleId: 'admin'

},
{
    
    firstName: "Client",
    lastName: "Client",
    email: "client@google.com",
    password: hashSync('123456', 10),
    roleId: 'client'

},
]

module.exports = users;