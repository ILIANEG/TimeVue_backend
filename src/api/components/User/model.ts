export class User {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    certificate: string;
    constructor(uId: string, email: string, fN: string, lN: string, cert: string) {
        this.userId = uId;
        this.email = email;
        this.firstName = fN;
        this.lastName = lN;
        this.certificate = cert;
    }

    /**
     * 
     * @todo databse query and business logic should be implemented;
     * @param email 
     * @param password hashed password
     * @returns function returns user object from the database, or null if matching record was not found
     */
    checkCredentials(email: string, password: string): User | null {
        const id = null;
        return id;
    }

    /**
     * 
     * @todo implement database query and business logic
     * @param userId 
     * @returns boolean representing if current user is certified to update short term jwt
     */
    checkCertificate(userId: string): boolean {
        return false;
    }
}