import express, { Application } from 'express';
import cors from 'cors';
import { productos } from '../routes/index.js';

export class Server {
  private app: Application;
  private port: string;
  private productoPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // Paths
    this.productoPath = '/api/producto';

    // Conexion a DB

    // middlewares
    this.middleware();

    // Inicializar rutas
    this.routes();

    // Inicialiazar conexion db
  }

  middleware() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.productoPath, productos);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server run on port ' + process.env.PORT);
    });
  }
}
