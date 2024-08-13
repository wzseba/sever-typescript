import { Router } from 'express';
import {
  getUsuarios,
  getUsuariosPorId,
  postUsuario
} from '../controller/index.js';

const usuarios = Router();

usuarios.get('/', getUsuarios);
usuarios.get('/:id', getUsuariosPorId);
usuarios.post('/', postUsuario);

export { usuarios };
