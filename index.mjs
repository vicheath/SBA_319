import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

import routes from "./routes/routes.mjs"

const ATLAS_URI = process.env.ATLAS_URI
const db = mongoose.connection
mongoose.connect(ATLAS_URI)
const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(routes)

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", ATLAS_URI));
db.on("close", () => console.log("mongo disconnected"));


// Global error handeling
app.use((err, _req, res, next) => {
    res.status(500).send("An unexpected error occured.");
  });
  
  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });