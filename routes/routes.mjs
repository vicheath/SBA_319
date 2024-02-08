import express from 'express'
import db from "../db/conn.mjs"
import { ObjectId } from 'mongodb'
import Comment from '../models/comments.mjs'

const router = express.Router()



router.get("/comments", async (req, res) => {
  try {
      // Fetch comments from the 'comments' collection with a limit of 25
      const comments = await db.collection('comments').find().limit(25).toArray();   
      res.json(comments);
  } catch (error) {
      // Handle any errors
      console.error('Error fetching comments:', error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/comments/names', async (req, res) => {
  let foundComment = await Comment.findById().limit(50)
  res.status(200).json({
    foundComment: foundComment
  })
})




//Get route for movies
router.get("/movies", async (req, res) => {
  try {
      const movies = await db.collection('movies').find().limit(25).toArray(); 
      res.json(movies);
  } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).send('Internal Server Error');
  }
});

//Get route for users
router.get("/users", async (req, res) => {
  try {
      const users = await db.collection('users').find().limit(25).toArray();
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});


// GET route for fetching a single user by ID
router.get("/users/:id", async (req, res) => {
  try {
      let collection = await db.collection("users");
      let query = { _id: new ObjectId(req.params.id) };
      let result = await collection.findOne(query);
  
      if (!result) res.send("Not found").status(404);
      else res.send(result).status(200);
  } catch (error) {
      // Handle any errors
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});


export default router;