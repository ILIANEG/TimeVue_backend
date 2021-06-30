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
 * @param token 
 * @param type 
 * @returns 
 */
export function verifyToken(token: string): Promise<Jwt.JwtPayload | undefined> {
    return new Promise<Jwt.JwtPayload | undefined>((res, rej) => {
        Jwt.verify(token, Globals.JWT_SECRET, (err, dec) => {
            if (err) {
                return rej(err);
            } else {
                return res(dec);
            }
        });
    });
}
