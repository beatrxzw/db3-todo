const userService = require ('../service/userService')
const express = require('express');
const authToken = require ('../middleware/authToken')

const router = express.Router()

router.post('/register', async(req, res) =>{
    try {
        const user = await userService.register(req.body);
        res.status(201).json({message: 'Usuário criado com sucesso!', user})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/login', async(req, res) => {
    try {
        const { user, token } = await userService.login(req.body)
        res.status(200).json({ message: 'Login realizado com sucesso!', user, token})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/profile', authToken, (req, res) =>{
    res.json({ message: `Bem-vindo a sua lista de afazeres, ${req.userId}!`})
})



module.exports = router
