import { MovieProps} from '@/lib/api/movie';
import { formatCurrency } from '@/lib/util';

export default function MovieHistory({ movies }: { movies: MovieProps[]}) {

    
    return (
        <div>
        {
            movies.map((movie: MovieProps, index: number) => (
                <div className="grid grid-cols-4 px-6" key={index}>
                    <div className="w-full">
                        {movie.original_title}
                    </div>
                    <div>
                        {formatCurrency(movie.budget)}
                    </div>
                    <div>
                        {formatCurrency(movie.revenue)}
                    </div>

                    <div className={movie.revenue - movie.budget > 0 ? "text-black" : "text-red-500"}>
                        {formatCurrency(movie.revenue - movie.budget)}
                    </div>
                </div>
            ))
            }
        </div>
    );
};