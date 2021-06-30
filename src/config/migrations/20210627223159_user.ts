import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('User', table => {
        table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v1()'));
        table.string('email');
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('password').notNullable();
        table.uuid("certificate").defaultTo(knex.raw('uuid_generate_v1()'));
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('User');
}