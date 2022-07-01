import express from "express";
import morgan from "morgan";

// Routes 
import languageRoutes from "./routes/languaje.routes";

const app = express();

// Settings
app.set("port", 4400);

// Middlewares
app.use(morgan("dev")); // me da un detalle de las peticiones que hago

app.use("/api/languages", languageRoutes);

export default app;