import { Router } from 'express';
import {
  getProductos,
  getProductoPorId,
  postProducto
} from '../controller/index.js';

const productos = Router();

productos.get('/', getProductos);
productos.get('/:id', getProductoPorId);
productos.post('/', postProducto);

export { productos };
