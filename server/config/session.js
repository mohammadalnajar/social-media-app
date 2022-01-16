import MongoStore from 'connect-mongo';
import session from 'express-session';

const sessionConfig = () => {
    const sessionConfigObj = session({
        store: new MongoStore({
            mongoUrl: process.env.MONGODB_URL,
        }),
        secret: 'DfSfdSsDdsFe3##$@DVD3385^$@&$@#',
        cookie: { maxAge: 300000 }, // 300000ms = 5 min / 900000ms = 15 min
        saveUninitialized: false,
    });
    return sessionConfigObj;
};
export default sessionConfig;
