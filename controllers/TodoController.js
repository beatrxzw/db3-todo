const User = require('../models/user')
const ToDo = require('../models/todo')

module.exports ={
    async index (req, res){
        const {user_id} = req.params
        const user = await User.findByPk(user_id, {
            include: { association: 'todo'}
        })
        return res.json(user)
    },

    async store (req, res){
        const { user_id } = req.params
        const { todo } = req.body

        const user = await User.findByPk(user_id)
        if (!user) {
            return res.status(400).json({error: 'Usuario não encontrado'})
        }
        const list = await ToDo.create({ 
            todo,
            user_id
         })
         return res.json(list)
    }
}