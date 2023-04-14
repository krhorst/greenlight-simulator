import { MovieProps} from '@/lib/api/movie';
import { formatCurrency } from '@/lib/util';

export default function MovieHistory({ movies }: { movies: MovieProps[]}) {

    if (movies.length == 0) {
        return <></>;
    }

    return (<div className="mx-5 my-5">
        <table className="min-w-full  rounded-md shadow-md">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Title
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Budget
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Box Office
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Net
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Correct?
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                    movies.map((movie: MovieProps, index: number) => (
                        <tr className="bg-gray-100 border-b" key={index}>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {movie.original_title}
                          </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {formatCurrency(movie.budget)}
                          </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {formatCurrency(movie.revenue)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {formatCurrency(movie.revenue - movie.budget)}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                            {movie.wasCorrect ? '\u2713' : "x"}
                          </td>
                        </tr>
            ))}
          </tbody>
        </table>
    </div>
    );
};