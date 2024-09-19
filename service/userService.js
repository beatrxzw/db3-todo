const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class userService {

    static async login({ email, password }) {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new error('Usuário não encontrado!');
            }

            const passwordCerta = await bcrypt.compare(password, user.passoword)
            if (!passwordCerta) {
                throw new error('Senha errada')
            }

            const token = jwt.sign({ id: user.id, email: user.email }, 'billieteamo', { expiresIn: '1h' })
            return { user, token }
        } catch(error){
            throw new error(erroor.message)
        }
    }
}

module.exports = userService;