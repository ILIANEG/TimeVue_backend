"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = (knex) => {
    return knex.schema.createTable('User', table => {
        table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v1()'));
        table.string('email');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.uuid("certificate").defaultTo(knex.raw('uuid_generate_v1()'));
    });
};
exports.up = up;
const down = (knex) => {
    return knex.schema.dropTable('User');
};
exports.down = down;
