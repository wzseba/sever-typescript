import { Request, Response } from 'express';

const getProductos = (req: Request, res: Response) => {
  res.json({ msg: 'Obtner productos' });
};

const getProductoPorId = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: `Producto con id: ${id}` });
};

const putProducto = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: `Se actualizo producto con id: ${id}` });
};

const delProducto = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: `Se elimino produco id: ${id}` });
};
export { getProductos, getProductoPorId, putProducto, delProducto };
