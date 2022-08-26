const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const dbMongose = require('../_mongooseDB/config/configDb');
const { middlewareError } = require('../middlewares');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //path de las rutas
    this.path = "/api";

    this.dbConection();
    this.middleware();
    this.routes();
  }

  //DataBase
  dbConection() {
    dbMongose();
  }

  //middleware
  middleware() {
    //CORS
    this.app.use(cors());

    //morgan
    this.app.use( morgan('tiny'));

    //json
    this.app.use(express.json());

    //static
    this.app.use(express.static("src/public"));
  }

  //Rutas
  routes() {
    this.app.use(this.path, require("../routes"));
  }

  //Errors
  errors() {
  this.app.use( middlewareError )
  }

  //Escuchando puerto
  get listen() {
    this.app.listen(this.port, () => {
      console.log(`El servido esta corriendo en el puerto: ${this.port} XD`);
    });
  }
}

module.exports = { Server };
