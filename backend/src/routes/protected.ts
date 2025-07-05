// src/routes/protected.ts
import { Router, Request, Response } from 'express'; // Correct import
import { expressjwt    } from 'express-jwt'; // Import the correct type
import { JwtPayload } from 'jsonwebtoken';
import { checkJwt } from '../auth';

type AuthenticatedRequest = Request & {
  auth?: JwtPayload;
};
const router = Router();

// Use JwtRequest type for the request parameter
router.get('/data', checkJwt, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Secure data!',
    user: req.auth?.sub  // Now properly typed
  });
});

export default router;