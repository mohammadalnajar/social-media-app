import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import colors from 'colors';
import connectDB from './config/connectDB.js';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';
import uploadRouter from './routes/upload.js';
import sessionConfig from './config/session.js';
// env settings
// eslint-disable-next-line no-underscore-dangle
const dirname = path.resolve();
dotenv.config({ path: `${dirname}/config/.env` });

const app = express();
const PORT = process.env.PORT || 4444;
// middleware
app.use('/images', express.static(path.join(dirname, 'public/images')));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(
    express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
app.use(sessionConfig());
app.use(helmet());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.send('Worked ...');
});
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/uploadImage', uploadRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// server init function
const startServer = async () => {
    // db connect
    await connectDB();
    app.listen(PORT, () =>
        console.log(`Server is running at http://localhost:${PORT} ...`.yellow)
    );
};

startServer();
