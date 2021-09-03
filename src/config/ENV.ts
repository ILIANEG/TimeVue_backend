const path = require('path');
import * as dotenv from 'dotenv';

dotenv.config({path: path.join(__dirname, '..', '..', '.env')})

const e = process.env

export const DEV = {
    PEPPER: e.PEPPER || '',
    SALT: e.SALT || '',
    SECRET: e.SECRET || '',
    APP_PORT : parseInt(e.APP_DEV_PORT || ''),
    DB_HOST: e.DB_DEV_HOST || '',
    DB_PORT: parseInt(e.DB_DEV_PORT || ''),
    DB_NAME: e.DB_DEV_NAME || '',
    DB_USERNAME: e.DB_DEV_USERNAME || '',
    DB_PASSWORD: e.DB_DEV_PASSWORD || '',
    DB_VERSION: e.DB_DEV_VERSION || '',
    KEYCLOACK_REALM:  e.KEYCLOACK_DEV_REALM || '',
    KEYCLOACK_AUTH_URL: e.KEYCLOACK_DEV_AUTH_URL || '',
    KEYCLOACK_RESOURCE: e.KEYCLOACK_DEV_RESOURCE || '',
}

checkEnv();

/**
 * @todo Set up proper error handling
 */
export function checkEnv() {
    if (!DEV.PEPPER || !DEV.SALT || !DEV.SECRET || !DEV.DB_HOST
        || !DEV.DB_PORT || !DEV.DB_NAME || !DEV.DB_USERNAME || !DEV.DB_PASSWORD
        || !DEV.KEYCLOACK_REALM || !DEV.KEYCLOACK_AUTH_URL
        || !DEV.KEYCLOACK_RESOURCE || !DEV.DB_VERSION) {
        throw new Error('Environment variables were not loaded')
    }
}