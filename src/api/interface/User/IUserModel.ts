import { UserSignature } from "./ITypes";

export default interface IUserModel {
    createUser: (firstName: string, lastName: string, email: string, password: string) => Promise<UserSignature>;
    checkCredentials: (email: string, password: string) => Promise<UserSignature>;
    checkCertificate: (userId: string, certificate: string) => Promise<boolean>;
}