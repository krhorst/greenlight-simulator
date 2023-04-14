import { MovieProps } from '@/lib/api/movie';
import MovieSelectionCard from '@/components/movie/movie-selection-card';

export default function MovieSelections({ movies, adjustScoreForSelection }: { movies: MovieProps[], adjustScoreForSelection: (movie: MovieProps) => void }) {


    return (
        <div className="grid grid-cols-2">
        {
            movies.map((m, index) => (
                <div className="w-full" key={index}>
                    <MovieSelectionCard movie={m} adjustScoreForSelection={adjustScoreForSelection} />
                </div>
            ))
            }
         </div>
    );

};