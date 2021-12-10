import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/connectDB.js';
import morgan from 'morgan';
import colors from 'colors';

// env settings
const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/config/.env` });

const app = express();
const PORT = process.env.PORT || 4444;

app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('Worked ...');
});

// db connect
const startServer = () => {
  connectDB();
  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT} ...`.yellow));
};

startServer();
