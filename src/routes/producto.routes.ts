import {Router} from 'express'
import { getProductos, getProductoPorId } from '../controller'

const productos = Router()

productos.get('/',getProductos)
productos.get('/:id',getProductoPorId)

export default productos