import IUserModel from "./IUserModel.interface";
import { IUser, UserTable } from "./IUser.interface";
import { inject, injectable } from 'inversify';
import Symbols from '../../../config/inversifySymbols'
import { Knex } from 'knex';

@injectable()
export default class UserModel implements IUserModel {

    constructor(
        @inject(Symbols.Knex) private knex: Knex
    ) {}

    async read() {
        return await this.knex.select().from<IUser>(UserTable.name)
    }

    async readById(id: string) {
        let user = await this.knex.select()
        .where({[UserTable.labels.id]: id })
        .from<IUser>(UserTable.name)
        return user[0] || null;
    }

    async create(user: IUser) {
        try {
            await this.knex(UserTable.name).insert<IUser>(user);
            let newUser = await this.readById(user.id);
            return newUser;
        } catch (error) {
         throw error;   
        }
    }

    async update(id: string, updatedUser: IUser) {
        return await this.knex(UserTable.name)
        .where({ [UserTable.labels.id]: id })
        .update<IUser>(updatedUser)
    }

    async delete(id: string) {
        return await this.knex(UserTable.name).
        where({ [UserTable.labels.id]: id })
        .del<IUser>()
    }

    async readByFirstLastName(firstName: string, lastName: string) {
        return await this.knex.select()
        .where({ [UserTable.labels.firstName]: firstName, [UserTable.labels.lastName]: lastName })
        .from<IUser>(UserTable.name)
    }

    async readByFirstName(firstName: string) {
        return await this.knex.select()
        .where({ [UserTable.labels.firstName]: firstName })
        .from<IUser>(UserTable.name)
    }

    async readByLastName(lastName: string) {
        return await this.knex.select()
        .where({ [UserTable.labels.lastName]: lastName })
        .from<IUser>(UserTable.name);
    }

    async readByEmail(email: string) {
        let user = await this.knex.select()
        .where({ [UserTable.labels.email]: email })
        .from<IUser>(UserTable.name);
        return user[0] || null
    }
}