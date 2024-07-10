import { Server } from './models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const server = new Server();

server.listen();
