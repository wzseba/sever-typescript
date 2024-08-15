import express, { Application } from 'express';
import cors from 'cors';
import { productos, usuarios } from '../routes/index.js';
import { dbConnection } from '../database/index.js';

export class Server {
  private app: Application;
  private port: string;
  private productoPath: string;
  private usuarioPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // Paths
    this.productoPath = '/api/producto';
    this.usuarioPath = '/api/usuarios';

    // Conexion a DB
    this.connectDB();

    // middlewares
    this.middleware();

    // Inicializar rutas
    this.routes();

    // Inicialiazar conexion db
  }
  async connectDB() {
    try {
      await dbConnection.authenticate();
      await dbConnection.sync();
    } catch (error) {
      console.error('Error al conectar con database:', error);
      // Finaliza el proceso si no se puede conectar a la base de datos
      process.exit(1);
    }
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.productoPath, productos);
    this.app.use(this.usuarioPath, usuarios);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server run on port ' + process.env.PORT);
    });
  }
}
