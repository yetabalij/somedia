import express from "express";
import { fileURLToPath } from "url";
/*Configuration*/
const __filename = fileURLToPath(import.meta.url);
const app = express();
const port = 5000;
app.listen(port, () => console.log(`server starts at: ${port}`));
