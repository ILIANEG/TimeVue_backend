import knex from 'knex'
import { knexConfig } from '../config/knexfile'

/**
 * @todo in prod, use dependancy injection 
 * to create knex instance so db access can be mocked
 * in testing
 * @todo in prod dont access knexfile.development directly, but decide with env var which config to use
 */
export const db = knex(knexConfig.development);