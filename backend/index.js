const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const users = require('./app/users');
const products = require('./app/products');
const categories = require('./app/categories');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect(config.database, config.databaseOpt);

    console.log('Connected to MongoDB shopApp');

    app.use('/users', users);
    app.use('/categories', categories);
    app.use('/products', products);
    app.use((req, res) => {
        res.status(404).send({"error": "404 Not found"});
    });

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
};

run().catch(console.log);