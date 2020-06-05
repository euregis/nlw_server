import knex from '../database/conection'
import {Request, Response } from 'express'

class ItemsController {
    async index(req:Request, res:Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                name: item.titulo,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        })
        return res.json(serializedItems)
    }
}

export default ItemsController;