import { Request, Response } from 'express';
import { Usuario } from '../models/index.js';

const getUsuarios = (req: Request, res: Response) => {
  res.json({ msg: 'Obtner usuarios' });
};

const getUsuariosPorId = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: `Usuario con id: ${id}` });
};

const postUsuario = async (req: Request, res: Response) => {
  try {
    const { id, nombre, estado } = req.body;
    const usuario = await Usuario.create({ id, nombre, estado });
    console.log(usuario);
    res.json({ msg: `Usuario creado`, usuario });
  } catch (error) {
    res.json({ error });
  }
};

export { getUsuarios, getUsuariosPorId, postUsuario };
