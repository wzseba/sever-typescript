import { Request, Response } from 'express';
import { Usuario } from '../models/usuario.js';

const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({ msg: 'Obtner usuarios', usuarios });
  } catch (error) {
    console.error();
  }
};

const getUsuariosPorId = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: `Usuario con id: ${id}` });
};

const postUsuario = async (req: Request, res: Response) => {
  try {
    const { nombre, estado } = req.body;
    const usuario = await Usuario.create({ nombre, estado });
    res.json({ msg: `Usuario creado`, usuario });
  } catch (error) {
    res.json({ error });
  }
};

export { getUsuarios, getUsuariosPorId, postUsuario };
