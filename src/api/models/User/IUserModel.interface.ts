import { IUser } from "./IUser.interface";
import { ICrud } from "../ICrud";

export default interface IUserModel extends ICrud<IUser, string> {
    readByFirstLastName(firstName: string, lastName: string): Promise<Array<IUser>>;
    readByFirstName(firstName: string): Promise<Array<IUser>>;
    readByLastName(lastName: string): Promise<Array<IUser>>;
    readByEmail(email: string): Promise<IUser>;
}