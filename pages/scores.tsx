import { GetStaticProps } from 'next';
import { useState, ReactNode, useEffect } from 'react';

import { ScoreProps } from '@/lib/api/score';
import { defaultMetaProps } from '@/components/layout/meta';
import ScoreList from '@/components/score/score-list';


export default function Scores() {

    const [topScores, setTopScores] = useState<ScoreProps[]>([]);
    
    useEffect(() => {
        getTopScores();
    }, []);

    // Refresh every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            getTopScores();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    
    const getTopScores = async () => {
        try {
            const response = await fetch('/api/score', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const newScores = await response.json();
                setTopScores(newScores);
            } else {
                alert("Failed to fetch scores! Try again.")
            }
        } catch (error) {
            console.error(error);
        }
    }
    


    return (<ScoreList scores={topScores} />)
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      meta: defaultMetaProps,
    },
    revalidate: 10
  };
};
