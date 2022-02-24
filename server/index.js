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
// cors options
const whitelist = [process.env.CLIENT_URL, process.env.CLIENT_URL_SEC];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
// middleware
app.use('/images', express.static(path.join(dirname, 'public/images')));
app.set('trust proxy', 1); // for deployment
app.use(cors(corsOptionsDelegate));
app.use(express.json({ limit: '50mb' }));
app.use(
    express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
app.use(sessionConfig());
app.use(helmet());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.send('Worked ...');
});
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/uploadImage', uploadRouter);

// server init function
const startServer = async () => {
    // db connect
    await connectDB();
    app.listen(PORT, () =>
        console.log(`Server is running at http://localhost:${PORT} ...`.yellow)
    );
};

startServer();
