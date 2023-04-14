import { MovieProps } from '@/lib/api/movie';
import MovieSelectionCard from '@/components/movie/movie-selection-card';

export default function MovieSelections({ movies, adjustScoreForSelection }: {
    movies: MovieProps[],
    adjustScoreForSelection: (movie: MovieProps, otherMovie: MovieProps) => void
}) {

    if (movies.length < 2) {
        return <></>;
    }

    return (
        <div className="grid grid-cols-2">
                <div className="w-full" key="1">
                <MovieSelectionCard movie={movies[0]} otherMovie={movies[1]} adjustScoreForSelection={adjustScoreForSelection} />
                </div>
                <div className="w-full" key="2">
                <MovieSelectionCard movie={movies[1]} otherMovie={movies[0]} adjustScoreForSelection={adjustScoreForSelection} />
                </div>
         </div>
    );

};