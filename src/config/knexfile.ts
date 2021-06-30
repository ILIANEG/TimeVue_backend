module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: '5432',
            user: 'illian',
            password: '3244',
            database: 'illian',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            type: 'ts'
        }
    }
};