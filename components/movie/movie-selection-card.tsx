import { MovieProps} from '@/lib/api/movie';

export default function MovieSelectionCard({ movie, otherMovie, adjustScoreForSelection }: {
    movie: MovieProps,
    otherMovie: MovieProps,
    adjustScoreForSelection: (movie: MovieProps, otherMovie: MovieProps) => void
}) {

    // helper to format budget as for example:
    // 1200000 should return $1.2 Million
    // 1000000 should return $1 Million
    // 100000 - $100,000
    const formatCurrency = (amount: number) => {
        if (amount < 1000000) {
            return `$${(amount / 1000).toFixed(1)}K`;
        }
        return `$${(amount / 1000000).toFixed(1)}M`;
    };
    
    return (
        <div className="max-w max-h my-2 mx-4 rounded bg-white p-8 shadow-lg rounded-lg">
            <div className="px-2 py-4">
                <div className="font-bold text-xl mb-2">Budget: {formatCurrency(movie.budget)}</div>
                    <p className="text-gray-700 text-base">
                        {movie.overview}
                    </p>
                </div>
            <div className="px-6 pt-4 pb-2">
                <span onClick={() => { adjustScoreForSelection(movie, otherMovie) }}
                    className="cursor-pointer inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Green Light</span>
                </div>
        </div>
    );
    
};