import * as ENV from './ENV'

export default {
    development: {
        client: 'pg',
        version: ENV.DEV.DB_VERSION,
        connection: {
            host: ENV.DEV.DB_HOST,
            user: ENV.DEV.DB_USERNAME,
            password: ENV.DEV.DB_PASSWORD,
            database: ENV.DEV.DB_NAME,
        },
        migrations: {
            directory: '../../db/migrations'
        },
        seeds: {
            directory: '../../db/seeds'
        }
    },
}