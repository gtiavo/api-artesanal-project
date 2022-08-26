

class SuccessfulModel {
    constructor( res, data = [], message = '' ){
        this.res = res;
        this.data = data;
        this.message = message;
    }

    response() {
        return this.res.status(this.status).json({ 
            error: false, 
            name: this.name, 
            status: this.status, 
            message: this.message ? this.message : this.msg, 
            data: this.data
        })
    }
};


module.exports = SuccessfulModel;