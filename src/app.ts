import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleware/notFound';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Everyone In Our Co-Working Space!');
});

// not found route handler
app.use(notFound);

export default app;
