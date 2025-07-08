import express from 'express';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const logs: any[] = [];

app.post('/log', (req, res) => {
    const log = {
      ...req.body,
      timestamp: new Date().toISOString()
    };
    logs.push(log);
    console.log('[LOGGED]', log);
    res.status(200).json({ message: 'Logged' });
  });

  app.get('/logs', (req,res) =>{
    res.status(200).json(logs);
  })

  const PORT = 4002;
  app.listen(PORT, () =>{
    console.log('Activity Logger Service is running on port', PORT);
  })