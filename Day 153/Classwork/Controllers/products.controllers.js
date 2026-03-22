let products = [
    {
        id: 0,
        name: "Harry Potter",
        Author: "J.K. Rowling",
        category: "Magic",
        price: 2.00
    },
    {
        id: 1,
        name: "Me, grandmother, Iliko and Ilarioni",
        Author: "Nodar Dumbadze",
        category: "Comedy",
        price: 3.00
    }
]

const getProducts = (req, res) => {
    res.status(200).json(products)
}

const addProduct = (req, res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.status(200).json(products)
}

const editProduct = (req, res) => {
    const id = Number(req.params.id)

    const newProduct = req.body

    const foundProduct = products.filter(prod => prod.id === id)[0]

    foundProduct.name = newProduct.name
    foundProduct.Author = newProduct.Author
    foundProduct.category = newProduct.category
    foundProduct.price = newProduct.price

    res.status(200).json(products)
}

export default {getProducts, addProduct, editProduct}