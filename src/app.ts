import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Everyone In Our Co-Working Space!');
});

// error handler
app.use(globalErrorHandler);
// not found route handler
app.use(notFound);

export default app;
