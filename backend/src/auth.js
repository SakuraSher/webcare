"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const express_jwt_1 = require("express-jwt");
const jwks_rsa_1 = require("jwks-rsa");
exports.checkJwt = (0, express_jwt_1.expressjwt)({
    secret: (0, jwks_rsa_1.expressJwtSecret)({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: '${AUTH0_DOMAIN}.well-known/jwks.json', //AUTH0_DOMAIN
    }),
    audience: '${AUTH0_AUDIENCE}',
    issuer: '${AUTH0_DOMAIN}',
    algorithms: ['RS256']
});
