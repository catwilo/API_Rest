import express from "express";
import morgan from "morgan";

// Routes 
import languageRoutes from "./routes/languaje.routes";

const app = express();

// Settings
app.set("port", 4400);

// Middlewares
app.use(morgan("dev")); // me da un detalle de las peticiones que hago
app.use(express.json()); // is for server to be able to understand and process JSON when create a row on DB

app.use("/api/languages", languageRoutes);

export default app;