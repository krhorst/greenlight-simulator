import { MovieProps} from '@/lib/api/movie';
import { formatCurrency } from '@/lib/util';

export default function MovieHistory({ movies }: { movies: MovieProps[]}) {

    
    return (
        <div>
            <div className="grid grid-cols-5 px-4 py-2" key="header">
                <div className="w-full font-bold">
                    Title
                </div>
                <div className="w-full font-bold">
                    Budget
                </div>
                <div className="w-full font-bold">
                    Revenue
                </div>
                <div className="w-full font-bold">
                    Profit
                </div>
                <div className="w-full font-bold">
                   Best Decision?
                </div>
            </div>
        {
            movies.map((movie: MovieProps, index: number) => (
                <div className="grid grid-cols-5 px-4" key={index}>
                    <div className="w-full h-full px-1 py-1">
                        {movie.original_title}
                    </div>
                    <div className="w-full">
                        {formatCurrency(movie.budget)}
                    </div>
                    <div className="w-full">
                        {formatCurrency(movie.revenue)}
                    </div>

                    <div className={movie.revenue - movie.budget > 0 ? "text-black" : "text-red-500"}>
                        {formatCurrency(movie.revenue - movie.budget)}
                    </div>
                    <div className={movie.wasCorrect ? 'text-green-500' : 'text-red-500'}>
                        {movie.wasCorrect ? '\u2713' : "x"}
                    </div>
                </div>
            ))
            }
        </div>
    );
};