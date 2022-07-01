import {
    config
} from "dotenv";

config();

export default {
    //no se escribe localhost pues compartiria el .env que contiene credenciales
    host: process.env.HOST || "No encuentra host xDDD",
    database: process.env.DATABASE || "No encuentra DB xDDD",
    userdb: process.env.USERDB || "No encuentra useer",
    password: process.env.PASSWORD || "No encuentra Password xDDD"
};