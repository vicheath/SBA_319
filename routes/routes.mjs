import express from 'express'
import db from "../db/conn.mjs"
import { ObjectId } from 'mongodb'
import Planet from '../models/comments.mjs'

const router = express.Router()

router.get( '/', (req, res) =>{
    res.send("Welcome to the API.");
});





export default router;