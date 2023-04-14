import mongoose from 'mongoose';
const { Schema } = mongoose;
import dbConnect from '../dbConnect';

export interface ScoreProps {
    _id?: string;
    id?: string;
    score: number;
    name: string;
}


const scoreSchema = new Schema<ScoreProps>({
    score: Number,
    name: String
}, {
    collection: 'scores',
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) { delete ret._id }
    }
});

export const Score = mongoose.models.Score || mongoose.model('Score', scoreSchema);

export async function upsertScore(score: ScoreProps): Promise<ScoreProps> {
    await dbConnect();
    // Update the score if there's one with the same name
    const existingScore = await Score.findOne({
        name: score.name
    }).exec();
    if (existingScore) {
        if (existingScore.score < score.score) {
            existingScore.score = score.score;
            await existingScore.save();
            return existingScore.toJSON();
        } else {
            // No need to update
            return existingScore.toJSON();
        }
    } else {
        // Otherwise, create a new score
        const result = await Score.create(score);
        return result.toJSON();
    }
}
    

export async function topScores(): Promise<ScoreProps[]> {
    await dbConnect();
    // Top 10 scores, descending
    const result = await Score.find().sort({ score: -1 }).limit(10).exec();
    return result.map((m) => m.toJSON());
}