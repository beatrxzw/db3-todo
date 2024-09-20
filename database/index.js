const Sequelize = require('sequelize');
const dbConfig = require('../config/config')

const User = require('../models/user')
const Todo = require('../models/todo')

const connection = new Sequelize(dbConfig)

User.init(connection)
Todo.init(connection)

Todo.associate(connection.models)
User.associate(connection.models)

module.exports = connection;