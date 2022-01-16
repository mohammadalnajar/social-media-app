import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import colors from 'colors';
import connectDB from './config/connectDB.js';
import usersRouter from './routes/users.js';
import sessionConfig from './config/session.js';
// env settings
// eslint-disable-next-line no-underscore-dangle
const dirname = path.resolve();
dotenv.config({ path: `${dirname}/config/.env` });

const app = express();
const PORT = process.env.PORT || 4444;
// middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig());
app.use(helmet());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.send('Worked ...');
});
app.use('/api/users', usersRouter);

// server init function
const startServer = async () => {
    // db connect
    await connectDB();
    app.listen(PORT, () =>
        console.log(`Server is running at http://localhost:${PORT} ...`.yellow)
    );
};

startServer();
