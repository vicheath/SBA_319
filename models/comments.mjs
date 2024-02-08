import mongoose from 'mongoose'
const Schema = mongoose.Schema
const model = mongoose.model

const commentsSchema = new Schema(
    {
        name: String,
        text: String,
        movie_id: Number
    }
)

const Comment = model('Comment', commentsSchema)

export default Comment