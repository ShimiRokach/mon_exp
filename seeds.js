const mongoose = require('mongoose');
const Product = require('./models/product');
const Category = require('./models/category');


mongoose.connect('mongodb://localhost:27017/candyStore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedProducts = [
    {
        name: 'ben&jerry',
        price: 4.00,
        category: 'ice cream'
    },
    {
        name: 'm&m',
        price: 4.99,
        category: 'chocolate'
    },
    {
        name: 'milka',
        price: 3.99,
        category: 'chocolate'
    },
    {
        name: 'pringles',
        price: 2.50,
        category: 'snack'
    },
    {
        name: 'coca cola',
        price: 2.69,
        category: 'drink'
    }
]

const seedCategories = [
    {
        name: 'ice cream'
    },
    {
        name: 'chocolate'
    },
    {
        name: 'snack'
    },
    {
        name: 'drink'
    }
]

Product.deleteMany({})
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

Category.deleteMany({})
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

Category.insertMany(seedCategories)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })    