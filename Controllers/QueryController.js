

import { items } from '../src/services'

export const controller = async (query) => {
    const data = await items(query.query)
    const dataOrganized = DataOrganize(data) 
    return dataOrganized
}

const DataOrganize = (data) =>{

    const { filters, results} = data

    const { values } = filters.find(x => x.id === 'category')
    const categories = values.map(value => value.name);
    const author = {}
    const items = getItems(results)

    return {author, categories, items};

}


const getItems = (results) =>{
    let items = []
    results.map( result => {
        items.push({
            id: result.id,
            title: result.title,
            picture: result.thumbnail,
            price: {
                currency: result.currency_id,
                amount: result.price,
                decimals: result.price.toFixed(2)
            },
            condition: result.condition,
            free_shipping: result.shipping.free_shipping
        })
    })

    return items
}
