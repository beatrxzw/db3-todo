const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class userService {


    static async register({email, password}) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await User.create({ email, password: hashedPassword })
            return user
        } catch (error) {
            throw new Error ('Erro ao registrar usuário')
        }
    }

    static async login({ email, password }) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new error('Usuário não encontrado!');
            }

            const passwordCerta = await bcrypt.compare(password, user.password)
            if (!passwordCerta) {
                throw new Error('Senha errada')
            }

            const token = jwt.sign({ id: user.id, email: user.email }, 'billieteamo', { expiresIn: '1h' })
            return { user, token }
        } catch(error){
            throw new Error(error.message)
        }
    }
}

module.exports = userService;