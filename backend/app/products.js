const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const auth = require('../auth');
const config = require('../config');
const Product = require('../models/Product');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
    let products;
    try {
        if(req.query.category) {
            products = await Product
                .find({category: req.query.category})
                .populate('user', 'username name phone -_id');
        } else {
            products = await Product.find().populate('user', 'name phone -_id');
        }
        return res.send(products);
    } catch (e) {
        return res.status(404).send({error: '404 Not Found'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product
            .findById(req.params.id)
            .populate('category')
            .populate('user', 'username name phone -_id');
        return res.send(product);
    } catch (e) {
        return res.status(404).send({error: '404 Not Found'});
    }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        const product = new Product(req.body);
        if(req.file) {
            product.image = req.file.filename;
        }
        product.user = req.user._id;
        await product.save();
        return res.send({message: 'Продукт успешно создан'});
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        req.body.user = req.user._id;
        const product = await Product.findOneAndRemove({
            _id: req.params.id,
            user: req.user._id
        });
        if(!product) {
            return res.status(403).send({error: 'У вас нет прав на удаление этого продукта'});
        }
        return res.send({message: `Продукт ${product.title} удалён`});
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;