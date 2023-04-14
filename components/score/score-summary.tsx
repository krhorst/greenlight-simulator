import { formatCurrency } from '@/lib/util';

export default function ScoreSummary({ score, name }: { score: number, name: string }) {

    return (
        <div className="max-w py-4 px-8 bg-white shadow-lg rounded-lg mx-5 my-10">
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">Score</h2>
                <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 my-2 text-lg font-semibold text-gray-700 mr-2 mb-2">{formatCurrency(score)}</span>
            </div>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">{name}</a>
            </div>
        </div>
    );

};