import { ScoreProps } from '@/lib/api/score';
import { formatCurrency } from '@/lib/util';

export default function ScoreList({ scores }: { scores: ScoreProps[] }) {


    return (<div className="mx-5 my-5">
        <div className="max-w py-4 px-8 bg-white shadow-lg rounded-lg mx-5 my-10">
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">High Scores</h2>
                <p className="py-2">How do you stack up?</p>
            </div>
        </div>

        <div className="shadow-lg rounded-lg mx-5">
        <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        Score
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                scores.map((score: ScoreProps, index: number) => (
                    <tr className="bg-gray-100 border-b" key={index}>
                        <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {index + 1}
                        </td>
                        <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap text-center">
                            {score.name}
                        </td>
                        <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap text-center">
                            {formatCurrency(score.score)}
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    </div>
    );

};