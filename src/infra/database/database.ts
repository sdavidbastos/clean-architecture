import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
    user: "sdavidbastos",
    password: "root",
    host: "localhost",
    database: "park",
    idleTimeoutMillis: 100,
});

export default db;
