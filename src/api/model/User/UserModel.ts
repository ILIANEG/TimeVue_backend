import IUserService from '../../interface/User/IUserService'
import { UserSignature } from '../../interface/User/ITypes'
import IUserModel from '../../interface/User/IUserModel';

export default class UserModel implements IUserModel {
    constructor(private UserService: IUserService) {}

    /**
     * 
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param password hashed password
     * @returns UserSignature @see UserSignature
     */
    async createUser(firstName: string, lastName: string, email: string, password: string): Promise<UserSignature> {
        let user = await this.UserService.createUser(firstName, lastName, email, password);
        return user;
    }

    /**
     * Function returns user with credentials provided
     * @param email 
     * @param password hashed password
     * @returns UserSignature @see UserSignature
     */
    async checkCredentials(email: string, password: string): Promise<UserSignature> {
        let user = await this.UserService.getUserByEmail(email, password);
        return user;
    }

    /**
     * Function checks if current jwt certificate matches the database certificate
     * @param userId 
     * @returns boolean
     */
    async checkCertificate(userId: string, certificate: string): Promise<boolean> {
        let userRecord = await this.UserService.getUserById(userId);
        return userRecord.certificate === certificate;
    }
}