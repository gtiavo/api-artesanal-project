const express   = require('express');
const cors      = require('cors');
const morgan    = require('morgan');
const dbMongose = require('../_mongooseDB/config/configDb');
const options   = require('../docs/swaggerOptions');
const swaggerUi = require('swagger-ui-express');
const fileUpload = require('express-fileupload');
const swaggerJsdoc        =  require ( 'swagger-jsdoc' ) ;
const { middlewareError } = require('../middlewares');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = "/api";

    this.dbConection();
    this.middleware();
    this.routes();
  }

  
  dbConection() {
    dbMongose();
  }

  
  middleware() {
   
    this.app.use(cors());

    this.app.use( morgan('tiny'));

    this.app.use(express.json());

    this.app.use(express.static("src/public"));

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

    this.app.use(fileUpload({ useTempFiles : true, tempFileDir : '/tmp/', 
    // createParentPath: true
   }));

  }

  routes() {
    this.app.use(this.path, require("../routes"));
  }

  errors() {
  this.app.use( middlewareError )
  }

  get listen() {
    this.app.listen(this.port, () => {
      console.log(`El servido esta corriendo en el puerto: ${this.port} XD`);
    });
  }
}

module.exports = { Server };
