import {Request,Response} from 'express'    

const getProductos = (req:Request, res:Response)=>{

    res.json({msg: "Obtner productos"})
}

const getProductoPorId = (req:Request, res:Response)=>{

    const {id} = req.params

    res.json({msg: `Producto con id ${id}`})
}
export{
    getProductos,
    getProductoPorId
}