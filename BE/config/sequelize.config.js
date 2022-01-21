require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: "postgres",

        pool: {
            max: 5, // Max number of open connections
            min: 0, // Min number of open connections
            idle: 10000,    // Remove a connection from the pool after the connection has been idle for 10 sec.
        },
    }
);

// async function testAuthentication() {
//     await sequelize
//         .authenticate()
//         .then(() => {
//             console.log("Connection successful");
//         })
//         .catch((err) => {
//             console.log("err", err);
//         });
// }
// testAuthentication();

// Drop & create {force: true}
// sequelize.sync();

module.exports = sequelize;
