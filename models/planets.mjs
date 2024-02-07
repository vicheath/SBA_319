import mongoose from 'mongoose'
const Schema = mongoose.Schema
const model = mongoose.model

const planetSchema = new Schema(
    {
        scores: [],
        class_id: Number,
        learner_id: Number
    }
)

const Planet = model('Planet', planetSchema)

export default Planet