const ModelErrors = require("./model-errors");


class BadRequestResponse extends ModelErrors {

    constructor(msg) {
        super(msg)
        this.name = 'BadRequest';
        this.status = 400;
        this.message = 'The server cannot or will not process the request due to something that is perceived to be a client error';   
    }

};

class UnauthorizedResponse extends ModelErrors {

    constructor(msg) {
        super(msg)
        this.name = 'Unauthorized';
        this.status = 401;
        this.message = 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated"';   
    }

};

class ForbiddenResponse extends ModelErrors {

    constructor(msg) {
        super(msg)
        this.name = 'Forbidden';
        this.status = 403;
        this.message = 'The client does not have access rights to the content';  
    }

};

class NotFoundResponse extends ModelErrors {

    constructor(msg) {
        super(msg)
        this.name = 'Not Found';
        this.status = 404;
        this.message = 'The server can not find the requested resource. In the browser, this means the URL is not recognized';  
    }

};





module.exports = {
    BadRequestResponse,
    UnauthorizedResponse,
    ForbiddenResponse,
    NotFoundResponse
};