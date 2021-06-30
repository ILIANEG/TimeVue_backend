export interface UserTable {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    certificate: string
}
export interface UserSignature {
    userId: string,
    certificate: string
}
export interface UserRecord {
    userId: string,
    email: string,
    firstName: string,
    lastName: string,
    certificate: string
}