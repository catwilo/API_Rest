//si quiero cambiar de DB solo cambio los datos en mi fichero .env

import mysql from "promise-mysql"; //permite conectarme a la DB
import config from "../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.userdb,
    password: config.password
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};