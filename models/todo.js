const {Model, DataTypes} = require('sequelize')

class todos extends Model{
    static init (connection){
        super.init({
            todo: DataTypes.STRING,
        }, {
            sequelize: connection
        })

    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey:'user_id', as:'user' })
    }
}

module.exports = todos;