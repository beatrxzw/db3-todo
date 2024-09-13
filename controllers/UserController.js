const { password } = require('../config/config')
const User = require('../models/user')

module.exports = {
    async index (req, res){
        const users = await User.findAll()
        return res.json(users)
    },
    async store (req, res){
        const {nome, email, senha} = req.body
        
        const newUser = await User.create({nome, email, password})
        return res.json(newUser)
    }
}