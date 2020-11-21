const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Поле "Категории" не должно быть пустым']
    },
    title: {
        type: String,
        required: [true, 'Поле "Название продукта" не должно быть пустым']
    },
    description: {
        type: String,
        required: [true, 'Поле "Описание продукта" не должно быть пустым']
    },
    image: {
        type: String,
        required: [true, 'Поле "Изображение" не должно быть пустым']
    },
    price: {
        type: Number,
        required: [true, 'Поле "Цена" не должно быть пустым']
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;