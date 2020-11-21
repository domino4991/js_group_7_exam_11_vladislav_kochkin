const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require('nanoid');
const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');

mongoose.connect(config.database, config.databaseOpt);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        for(let nameColl of collections) {
            await db.dropCollection(nameColl.name);
        }
        const [house, computers, cars] = await Category.create({
            title: 'Дома'
        }, {
            title: 'Компьютеры'
        }, {
            title: 'Машины'
        });

        const [domino, badOmen, mouse] = await User.create({
            username: 'domino',
            password: 'testpass',
            name: 'Domino',
            phone: '0555-55-55-55',
            token: nanoid()
        }, {
            username: 'bad_omen',
            password: 'testpass',
            name: 'Пикачу',
            phone: '0555-66-67-77',
            token: nanoid()
        }, {
            username: 'mouse',
            password: 'testpass',
            name: 'Суровая мышь',
            phone: '0555-88-99-00',
            token: nanoid()
        });

        await Product.create({
            title: 'Apple MacBook Pro 13″ (Mid 2020)',
            price: '125000',
            category: computers,
            user: domino,
            description: 'Продаю макбук, как новый. Заберите поскорей эту "чудо" машину.',
            image: 'macbook.jpg'
        }, {
            title: 'hp pavilion gaming 15',
            price: '80000',
            category: computers,
            user: badOmen,
            description: 'Продаю ноутбук, как новый. Не подходит под мои задачи',
            image: 'hp_pavilion.jpg'
        }, {
            title: 'Большой 2-х этажный дом',
            price: '5000000',
            category: house,
            user: mouse,
            description: 'Продаю большой 2-х этажный дом. С бассейном, гаражом, панорамным видом на ущелье.',
            image: 'house.jpg'
        }, {
            title: 'Yamaha shadow 750',
            price: '350000',
            category: cars,
            user: domino,
            description: 'Продаю мотоцикл Yamaha Shadow 750. Пройдено полное ТО. Пробег 5000 км',
            image: 'yamaha.png'
        });
    } catch (e) {
        console.log(e);
    }
    db.close();
});