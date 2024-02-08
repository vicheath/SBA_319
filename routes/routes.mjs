import express from 'express'
import db from "../db/conn.mjs"
import { ObjectId } from 'mongodb'
import Comment from '../models/comments.mjs'

const router = express.Router()

// router.get("/:id", async (req, res) => {
//   let foundGrade = await Comment.findById(req.params.id)
//   res.status(200).json({
//     data: foundGrade
//   })
// })

router.get("/comments", async (req, res) => {
  try {
      // Fetch customers from the 'customers' collection with a limit of 25
      const customers = await db.collection('comments').find().limit(25).toArray();
      
      res.json(customers);
  } catch (error) {
      // Handle any errors
      console.error('Error fetching customers:', error);
      res.status(500).send('Internal Server Error');
  }
});

//Get route for movies
router.get("/movies", async (req, res) => {
  try {
      // Fetch customers from the 'customers' collection with a limit of 25
      const movies = await db.collection('movies').find().limit(25).toArray();
      
      res.json(movies);
  } catch (error) {
      // Handle any errors
      console.error('Error fetching movies:', error);
      res.status(500).send('Internal Server Error');
  }
});

//Get route for users
router.get("/users", async (req, res) => {
  try {
      // Fetch customers from the 'customers' collection with a limit of 25
      const users = await db.collection('users').find().limit(25).toArray();
      
      res.json(users);
  } catch (error) {
    
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});



export default router;