const Sequelize = require('sequelize');
// const dbConfig = require('../config/config')

const User = require('../models/user')
const Todo = require('../models/todo')

const connection = new Sequelize('postgresql://todo-db_owner:V8Rogb7DsieU@ep-floral-leaf-a5di40w6.us-east-2.aws.neon.tech/todo-db?sslmode=require', {
     dialect: 'postgres'
})

User.init(connection)
Todo.init(connection)

Todo.associate(connection.models)
User.associate(connection.models)

module.exports = connection;