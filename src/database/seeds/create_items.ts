import Knex from 'knex'

export async function seed(knex:Knex){
    await knex('items').insert([
        {titulo: 'Lâmpadas', image:'lampadas.svg'},
        {titulo: 'Pilhas e bateria', image:'baterias.svg'},
        {titulo: 'Papéis e Papelão', image:'papies-papelao.svg'},
        {titulo: 'Residuos Eletrônicos', image:'eletronicos.svg'},
        {titulo: 'Residuos Orgânicos', image:'organicos.svg'},
        {titulo: 'Óleo de Cozinha', image:'oleo.svg'},
    ])
}