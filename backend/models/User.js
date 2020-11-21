const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Поле "Логин" должно быть заполнено'],
        unique: true,
        validate: {
            validator: async function (value) {
                const user = await User.findOne({username: value});
                if(user) return false;
            },
            message: 'Такой пользователь уже существует'
        }
    },
    password: {
        type: String,
        required: [true, 'Поле "Пароль" обязательно для заполнения']
    },
    name: {
        type: String,
        required: [true, 'Поле "Имя" обязательно для заполнения']
    },
    phone: {
        type: String,
        required: [true, 'Поле "Номер телефона" обязательно для заполнения']
    },
    token: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

UserSchema.methods.checkPass = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.genToken = function () {
    this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;