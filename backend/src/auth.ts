import {expressjwt} from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

const domain = process.env.AUTH0_DOMAIN ;

export const checkJwt = expressjwt(
    {
        secret: expressJwtSecret(
            {
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${domain}.well-known/jwks.json`, //AUTH0_DOMAIN

            }
        ),
        audience:  `${process.env.AUTH0_AUDIENCE}`,
        issuer: `${domain}`,
        algorithms: ['RS256']        
    }
)

console.log(" AUTH0_DOMAIN:", domain);
console.log(" JWKS URI:", `${domain}.well-known/jwks.json`);