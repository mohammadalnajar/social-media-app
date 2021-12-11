import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/connectDB.js';
import morgan from 'morgan';
import helmet from 'helmet';
import colors from 'colors';

import { router as usersRouter } from './routes/users.js';
// env settings
const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/config/.env` });

const app = express();
const PORT = process.env.PORT || 4444;

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('Worked ...');
});
app.use('/', usersRouter);
// server init function
const startServer = () => {
  // db connect
  connectDB();
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} ...`.yellow));
};

startServer();
