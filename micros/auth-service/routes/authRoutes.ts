import { createUser, logInUser } from '../controller/authController';
import { Router } from 'express';

const authRouter = Router();

authRouter.use('/signup', createUser);
authRouter.use('/signin', logInUser);

export default authRouter;
