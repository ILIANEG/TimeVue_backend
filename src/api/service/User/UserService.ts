import IUserService from '../../interface/User/IUserService';
import { db } from '../../../utils/db';
import { UserTable, UserSignature, UserRecord } from '../../interface/User/ITypes'


/**
* @todo this class is tightly coupled with instance of database. Think it over
 */
export default class UserService implements IUserService {
    
    /**
     * Function creates user based on firstName, lastName, email and password
     * @param firstName
     * @param lastName
     * @param email
     * @param password
     * @returns returns UserSignature @see UserSignature
     */
    async createUser(firstName: string, lastName: string, email: string, password: string): Promise<UserSignature> {
        const user = await db<UserTable>('User').insert({
            email,
            first_name: firstName,
            last_name: lastName,
            password: password
        })
        .returning(['id', 'certificate'])
        return {userId: user[0].id, certificate: user[0].certificate};
    }
    /**
     * This function returns user record based on provided id
     * @param userId 
     * @returns UseRecord @see UserRecord record
     */
    async getUserById(userId: string): Promise<UserRecord> {
        const user = await db<UserTable>('User').select('id', 'email', 'first_name', 'last_name', 'certificate').where({'id': userId});
        return {userId: user[0].id, email: user[0].email, firstName: user[0].first_name, lastName: user[0].last_name, certificate: user[0].certificate};
    }

    /**
     * Function returns user found by email+password match
     * @param userEmail 
     * @param userPassword 
     * @returns UserSignature @see UserSignature
     */
    async getUserByEmail(userEmail: string, userPassword: string): Promise<UserSignature> {
        const user = await db<UserTable>('User').select('id', 'certificate').where({'email': userEmail, 'password': userPassword});
        return {userId: user[0].id, certificate: user[0].certificate};
    }

    /**
     * This function updates a certificate. This functionality might be used to prevent refreshing the JWT token, and force authentication
     * Use case might be in change password. When the password is changed we would liek to revoke the JWT from all signed devices, in such way
     * @param userId 
     * @returns 
     */
    async updateCertificate(userId: string): Promise<UserSignature> {
        const user = await db<UserTable>('User').where({'id': userId}).update({'certificate': db.raw('uuid_generate_v1()')}).returning(['id', 'certificate']);
        return {userId: user[0].id, certificate: user[0].certificate};
    }
}