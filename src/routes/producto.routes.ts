import { Router } from 'express';
import { getProductos, getProductoPorId } from '../controller/index.js';

const productos = Router();

productos.get('/', getProductos);
productos.get('/:id', getProductoPorId);

export { productos };
