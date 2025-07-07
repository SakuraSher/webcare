import express from 'express';
import { expressjwt, ExpressJwtRequest } from 'express-jwt'; // Correct import
import cors from 'cors';
import 'dotenv/config';
import protectedRouter from './routes/protected';
import { checkJwt } from './auth';
import axios from 'axios';


const app = express();

// Add request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

//Middleware

app.use(cors())
app.use(express.json())

//Routes
app.use('/api', protectedRouter)
app.get('/api/user-data',checkJwt,(req: express.Request, res: express.Response) =>
    {
     try{
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
      secretInfo: `Only user ${userId} can see this`
    }
});
     } catch (err) {
    console.log('JWT payload:',(req as any).auth?.sub); // Debug
    throw err;
  }   
     
     
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
const server=  app.listen(process.env.PORT,() =>{
     console.log(`Server running on http://localhost:${process.env.PORT}`);
} );

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
