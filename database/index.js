const Sequelize = require('sequelize');
const dbConfig = require('../config/config')

const User = require('../models/user')
const toDo = require('../models/todo')

const connection = new Sequelize(dbConfig)

User.init(connection)
toDo.init(connection)

toDo.associate(connection.models)
User.associate(connection.models)

module.exports = connection;