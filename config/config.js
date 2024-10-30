module.exports = {
    development: {
        url: 'postgresql://todo-db_owner:V8Rogb7DsieU@ep-floral-leaf-a5di40w6.us-east-2.aws.neon.tech/todo-db?sslmode=require',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Para desenvolvimento, você pode manter como false
            },
        },
        define: {
            timestamps: true,
        },
    },
    // Se necessário, você pode adicionar configurações para test e production
};
