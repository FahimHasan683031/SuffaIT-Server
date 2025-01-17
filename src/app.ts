import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors());


app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});


// global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
