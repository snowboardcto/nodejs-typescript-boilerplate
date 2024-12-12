import express, { Request, Response } from "express";
import { HelloWorld } from "./hello-world";

export const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
    let helloWorld = new HelloWorld();
    res.send(helloWorld.getHello());
})

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}.`);
    });
}