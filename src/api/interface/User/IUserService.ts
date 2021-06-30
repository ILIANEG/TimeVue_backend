import { UserSignature, UserRecord } from './ITypes'

/**
 * An interface describing how @see UserService should be implemented
 * Used to inject dependancy
 */
export default interface IUserService {
    createUser: (firstName: string, lastName: string, email: string, password: string) => Promise<UserSignature>;
    getUserById: (userId: string) => Promise<UserRecord>;
    getUserByEmail: (userEmail: string, userPassword: string) => Promise<UserSignature>;
    updateCertificate: (userId: string) => Promise<UserSignature>;
}