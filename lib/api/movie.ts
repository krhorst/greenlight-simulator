import mongoose from 'mongoose';
const { Schema } = mongoose;
import dbConnect from '../dbConnect';

export interface MovieProps {
    _id: string;
    id: string;
    original_title: string;
    budget: number;
    revenue: number;
    overview: string;
    wasCorrect?: boolean;
}


const movieSchema = new Schema <MovieProps>({
    original_title: String,
    budget: Number,
    revenue: Number,
    overview: String
}, {
    collection: 'movies',
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) { delete ret._id }
    }
});

export const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema, "movies");

    

export async function randomMovies(): Promise<MovieProps[]> {
    await dbConnect();
    // get ids of two random movies
    const randomIds = await Movie.aggregate([
        { $sample: { size: 2 } },
        { $project: { _id: 1 } }
    ]).exec();
    // fetch full documents
    const result = await Movie.find({ _id: { $in: randomIds } }).exec();
    return result.map((m) => m.toJSON());
}