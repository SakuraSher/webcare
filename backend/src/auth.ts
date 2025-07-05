import {expressjwt} from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

export const checkJwt = expressjwt(
    {
        secret: expressJwtSecret(
            {
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: '${AUTH0_DOMAIN}.well-known/jwks.json', //AUTH0_DOMAIN

            }
        ),
        audience:  '${AUTH0_AUDIENCE}',
        issuer: '${AUTH0_DOMAIN}',
        algorithms: ['RS256']        
    }
)