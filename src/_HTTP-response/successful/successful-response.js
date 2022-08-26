const SuccessfulModel = require("./successful-model");


class OkResponse extends SuccessfulModel {
    constructor(res, data, message){
        super(res, data, message)

        this.name = 'OK';
        this.status = 200;
        this.msg = 'OK';

        this.response();
    }
};

class CreatedResponse extends SuccessfulModel {
    constructor(res, data, message){
        super(res, data, message)

        this.name = 'Created';
        this.status = 201;
        this.msg = 'The request succeeded, and a new resource was created as a result';

        this.response();
    }
};


module.exports = {
    CreatedResponse,
    OkResponse
}