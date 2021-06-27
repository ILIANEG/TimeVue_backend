export const knexConfig = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            port: '5432',
            user: 'timevue',
            password: '35Jk47ezY&k@'
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};