import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import colors from 'colors';
import { connectDB } from './config/connectDB.js';
import { router as usersRouter } from './routes/users.js';

// env settings
const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/config/.env` });

const app = express();
const PORT = process.env.PORT || 4444;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
