"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const protected_1 = __importDefault(require("./routes/protected"));
const auth_1 = require("./auth");
const app = (0, express_1.default)();
// Add request logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
//Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routes
app.use('/api', protected_1.default);
app.get('/api/user-data', auth_1.checkJwt, (req, res) => {
    var _a, _b;
    try {
        const userId = (_a = req.auth) === null || _a === void 0 ? void 0 : _a.sub;
        res.json({
            userId,
            protectedData: {
                messages: ["Server says:", "This data is protected!"],
                serverTime: new Date().toISOString(),
                secretInfo: `Only user ${userId} can see this`
            }
        });
    }
    catch (err) {
        console.log('JWT payload:', (_b = req.auth) === null || _b === void 0 ? void 0 : _b.sub); // Debug
        throw err;
    }
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
server.on('error', (err) => {
    console.error('Server error:', err);
});
process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
});
