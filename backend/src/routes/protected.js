"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/protected.ts
const express_1 = require("express"); // Correct import
const auth_1 = require("../auth");
const router = (0, express_1.Router)();
// Use JwtRequest type for the request parameter
router.get('/data', auth_1.checkJwt, (req, res) => {
    var _a;
    res.json({
        message: 'Secure data!',
        user: (_a = req.auth) === null || _a === void 0 ? void 0 : _a.sub // Now properly typed
    });
});
exports.default = router;
