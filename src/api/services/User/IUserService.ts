import { IUser } from '../../models/User/IUser.interface'

interface IUserService{
    isUserInDb(userID: string): Promise<boolean>;
    isUserSubscribed(userID: string): Promise<boolean>;
    createNewUser(id: string, email: string, firstName: string, lastName: string): Promise<IUser>;
    updateUser(user: IUser): Promise<IUser>;
}