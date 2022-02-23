import MongoStore from 'connect-mongo';
import session from 'express-session';

const sessionConfig = () => {
    const sessionConfigObj = session({
        store: new MongoStore({
            mongoUrl: process.env.MONGODB_URL,
        }),
        secret: 'DfSfdSsDdsFe3##$@DVD3385^$@&$@#',
        cookie: {
            maxAge: 1 * 60 * 1000,
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : false,
            secure: process.env.NODE_ENV === 'production' && true,
        }, // 300000ms = 5 min / 900000ms = 15 min
        saveUninitialized: false,
    });
    return sessionConfigObj;
};
export default sessionConfig;

// https://expressjs.com/en/guide/behind-proxies.html
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://stackoverflow.com/questions/63010545/issue-with-cross-site-cookies-how-to-set-cookie-from-backend-to-frontend
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
