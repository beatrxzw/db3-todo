const express = require('express');
const UserController = require('../controllers/UserController')
const TodoController = require('../controllers/TodoController')
const LoginRouter = require ('../router/login')


const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/todos', TodoController.store)
routes.get('/users/:user_id/todos', TodoController.index)

routes.use('/auth', LoginRouter);


module.exports = routes;