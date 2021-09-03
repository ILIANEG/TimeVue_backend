import express from 'express';
import { router as user } from './routers/userRouter'
import * as ENV from '../config/ENV'

ENV.checkEnv();

const app = express();

app.use('', user);

export { app };