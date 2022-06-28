import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import 'dotenv/config';

import talleres from "./routesTalleres.js";

const app = express();

const URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/talleres', talleres);

mongoose.connect(URI)
    .then(() => app.listen(PORT, () => console.log("server corriendo en puerto: " + PORT)))
    .catch((err) => console.log(err));
