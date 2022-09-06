const {hashSync} = require('bcryptjs');

const users = [
    {
    
    firstName: "Test",
    lastName: "One",
    email: "testone@google.com",
    password: hashSync('123456', 10),
    roleId: 1

},
{
    
    firstName: "Test",
    lastName: "Two",
    email: "testtwo@google.com",
    password: hashSync('123456', 10),
    roleId: 2

},
]

module.exports = users;