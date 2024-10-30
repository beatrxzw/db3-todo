const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init (connection){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            modelName: 'User', // Nome do modelo
            tableName: 'users',
            sequelize: connection
        })

    }

    static associate(models){
        this.hasMany(models.todos, { foreignKey:'user_id', as:'todo' })
    }
}

module.exports = User;