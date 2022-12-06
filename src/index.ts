/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import { router } from "./routes/credit-card.route";

/**
 * App Variables
 */

dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */

app.use(express.json());

/**
 * Server Activation
 */

app.use("/api/validate/", router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});