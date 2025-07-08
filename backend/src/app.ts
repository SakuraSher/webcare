
import express from 'express';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import 'dotenv/config';
import protectedRouter from './routes/protected';
import { checkJwt } from './auth';

const app = express();

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', protectedRouter);

// ✅ Final version: Use req.auth directly (M2M-safe)
app.get('/api/user-data', checkJwt, (req: express.Request, res: express.Response): void => {
  const auth = (req as any).auth;

  if (!auth || !auth.sub) {
    res.status(401).json({ error: 'Invalid or missing token' });
    return;
  }

  res.json({
    authPayload: auth,
    protectedData: {
      messages: ["Server says:", "This data is protected!"],
      serverTime: new Date().toISOString(),
      clientIdOrUser: auth.sub
    }
  });
});

// Global error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
