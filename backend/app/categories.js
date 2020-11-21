const router = require('express').Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        return res.send(categories);
    } catch (e) {
        return res.status(500).send({error: 'Eternal Server Error'});
    }
});

module.exports = router;