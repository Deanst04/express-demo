import express, { type Request, type Response, type NextFunction } from 'express';

const app = express();

app.use(express.json());

function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`logging request very very very good`);
    next();
}

app.use(logRequest);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Render! Your Express server is running 🟢");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
