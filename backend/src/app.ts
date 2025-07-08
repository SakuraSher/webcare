
import express from 'express';
import { expressjwt } from 'express-jwt';
import cors from 'cors';
import 'dotenv/config';
import protectedRouter from './routes/protected';
import { checkJwt } from './auth';
import axios from 'axios';

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
app.get('/api/user-data', checkJwt, async(req: express.Request, res: express.Response): Promise<void>=> {
  try{
     const auth = (req as any).auth;

     if (!auth || !auth.sub) {
    res.status(401).json({ error: 'Invalid or missing token' });
    return;
     }


//Routes
//app.use('/api', protectedRouter)
//app.get('/api/user-data',checkJwt,(req: express.Request, res: express.Response) =>
  //  {
     
        const userId = (req as any).auth?.sub;

        await axios.post(`${process.env.LOGGER_URL}/log`, {
          service: "backend",
          event: "USER_DATA_REQUESTED",
          user: userId
        });

    res.json({
    userId,
    protectedData: {
      messages: ["Server says:", "This data is protected!"],
      serverTime: new Date().toISOString(),
      clientIdOrUser: auth.sub
    }
  });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
