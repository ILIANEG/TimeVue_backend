import * as Jwt from 'jsonwebtoken';
import * as Globals from '../config/globals'

/**
 * 
 * @param payload object containing the payload of the jwt token
 * @param hoursValid (in HOURs, pased as INTEGER) time constrain on jwt token validity
 * @returns Promise<string | undefined>
 */
function issueToken(payload: {userId: string}, hoursValid: number, secret:string): Promise<string | undefined> {
    return new Promise<string | undefined>((res, rej) => {
        Jwt.sign(payload, secret, {expiresIn: `${hoursValid}h`}, (err, token) => {
            if (err) {
                return rej(err);
            } else {
                return res(token);
            }
        })
    })
}

/**
 * 
 * @see issueToken is an implementation
 * @param payload object containing the payload of the jwt token
 * @returns Promise<string | undefined>
 */
export function issueShortTermToken(payload: {userId: string}): Promise<string | undefined> {
    return issueToken(payload, 1, Globals.JWT_SECRET);
}

/**
 * 
 * @see issueToken is an implementation
 * @param payload object containing the payload of the jwt token
 * @returns Promise<string | undefined>
 */
 export function issueCertificate(payload: {userId: string}): Promise<string | undefined> {
    return issueToken(payload, 8760, Globals.CERTIFICATE_SECRET);
}

/**
 * 
 * @param token 
 * @param type 
 * @returns 
 */
export function verifyToken(token: string, type: 'token' | 'certificate'): Promise<Jwt.JwtPayload | undefined> {
    return new Promise<Jwt.JwtPayload | undefined>((res, rej) => {
        Jwt.verify(token, (type === 'token' ? Globals.JWT_SECRET : Globals.ENC_SECRET), (err, dec) => {
            if (err) {
                return rej(err);
            } else {
                return res(dec);
            }
        });
    });
}
