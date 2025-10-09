import express, { Request, Response } from 'express';
import authRouter from './routes/authRoutes';
const app = express();

const PORT = 4001;

app.use(express.json());
app.use(authRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('This is get route');
});
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
