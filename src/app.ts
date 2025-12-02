import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Middleware
function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`logging request very very very good`);
    next();
}
app.use(logRequest);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Render! Your Express server is running 🟢");
});

// JSON route for the frontend
app.get("/api/data", (req: Request, res: Response) => {
    res.json({
        message: "Hello Dean! This JSON comes from Express 🚀",
        time: new Date().toISOString(),
        randomNumber: Math.floor(Math.random() * 100),
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});