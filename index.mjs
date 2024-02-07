import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"


const ATLAS_URI = process.env.ATLAS_URI
const db = mongoose.connection
mongoose.connect(ATLAS_URI)
const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));
