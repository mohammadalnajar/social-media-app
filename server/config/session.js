import MongoStore from 'connect-mongo';
import session from 'express-session';

const sessionConfig = () => {
    const sessionConfigObj = session({
        store: new MongoStore({
            mongoUrl: process.env.MONGODB_URL,
        }),
        secret: 'blablabla',
        cookie: { maxAge: 100000 },
        saveUninitialized: false,
    });
    return sessionConfigObj;
};
export default sessionConfig;
