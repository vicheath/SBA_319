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

const Comments = model('Comments', commentsSchema)

export default Comments