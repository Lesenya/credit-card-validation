import * as dotenv from "dotenv";
import express from "express";
import { router } from "./routes/credit-card.route";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(express.json());

app.use("/api/validate/", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});