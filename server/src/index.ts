import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/*Configuration*/
const __filename = fileURLToPath(import.meta.url);

const app = express();

const port = 5000;

app.listen(port, () => console.log(`server starts at: ${port}`));
