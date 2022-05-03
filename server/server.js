import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => res.send("Hello World!"));
app.use("*", (req, res) => res.sendStatus(404));

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI || "mongodb://localhost:27017/pet_connect_db";

mongoose.connect(db_uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error(`Error connecting to MongoDB server: ${err}`);
        process.exit(1);
    });

mongoose.connection.on("error", err => {
    console.error(`Error connecting to MongoDB server: ${err}`);
    process.exit(1);
});