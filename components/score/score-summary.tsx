import { formatCurrency } from '@/lib/util';

export default function MovieSelectionCard({ score }: { score: number }) {

    return (
        <div className="h-20 justify-center flex flex-col px-6">
            <div className="text-xl">Score</div>
            <div className="text-xl">{formatCurrency(score)}</div>
        </div>
    );

};