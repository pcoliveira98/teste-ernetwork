require('dotenv/config');

module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: 'mysql',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
}