import { Knex } from "knex";

export const up = (knex: Knex) => {
    return knex.schema.createTable('User', table => {
        table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v1()'));
        table.string('email');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.uuid("certificate").defaultTo(knex.raw('uuid_generate_v1()'));
    })
}

export const down = (knex: Knex) => {
    return knex.schema.dropTable('User');
}