require('dotenv').config();
    module.exports = {
        dialect: 'mysql', 
        host: 'localhost',
        username: 'root',
        password:'1234',
        database: 'tododb',
        define: {
            timestamps: true,
        }
    }