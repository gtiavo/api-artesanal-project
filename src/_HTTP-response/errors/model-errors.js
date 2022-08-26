

class ModelErrors extends Error {
    constructor( msg = '' ) {
        super(msg)
        this.msg = msg
        this.status;
        this.message;
       
    }

    toJson() {
        return {
            error: true,
            name: this.name,
            status:this.status,
            message: this.msg ? this.msg : this.message,
            data: []
        }
    }
}

module.exports = ModelErrors;