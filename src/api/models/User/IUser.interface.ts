import Table from "../../../utils/Table";
import Validator from "validatorjs";

export interface IUser {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    subscribed: boolean,
}

export const validationSchema = {
    id: 'required',
    email: 'required|email',
    firstName: 'required|between:2,26',
    lastName: 'required|between:2,26',
    subscribed: 'required',
}

export const UserTable = new Table<IUser>('Users', {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    subscribed: 'subscribed'
});