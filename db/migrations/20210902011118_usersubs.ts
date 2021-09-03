import { Knex } from 'knex';
import { UserTable } from '../../src/api/models/User/IUser.interface'

exports.up = function(knex: Knex) {
    return knex.schema.createTable(UserTable.name, table => {
        table.string(UserTable.labels.id).unique().notNullable();
        table.string(UserTable.labels.email).unique().notNullable();
        table.string(UserTable.labels.firstName).notNullable();
        table.string(UserTable.labels.lastName).notNullable();
        table.boolean(UserTable.labels.subscribed).notNullable().defaultTo(false);
    })
};

exports.down = function(knex: Knex) {
    return knex.schema.createTable(UserTable.name, table => {
        table.string(UserTable.labels.id).unique().notNullable();
        table.string(UserTable.labels.email).notNullable();
        table.string(UserTable.labels.firstName).notNullable();
        table.string(UserTable.labels.lastName).notNullable();
    })
};
