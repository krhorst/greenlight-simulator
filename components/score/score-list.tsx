import { ScoreProps } from '@/lib/api/score';
import { formatCurrency } from '@/lib/util';

export default function ScoreList({ scores }: { scores: ScoreProps[] }) {


    return (
        <div>
            {
                scores.map((score: ScoreProps, index: number) => (
                    <div className="grid grid-cols-3 px-6" key={index}>
                        <div className="w-full">
                            {index + 1}
                        </div>
                        <div className="w-full">
                            {score.name}
                        </div>
                        <div className="w-full">
                            {formatCurrency(score.score)}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};