import { GetStaticProps } from 'next';
import { useState, ReactNode, useEffect } from 'react';

import { randomMovies, MovieProps } from '@/lib/api/movie';
import { defaultMetaProps } from '@/components/layout/meta';
import clientPromise from '@/lib/mongodb';
import MovieHistory from '@/components/movie/movie-history';
import ScoreSummary from '@/components/score/score-summary';
import MovieSelections from '@/components/movie/movie-selections';

export default function Home() {
    const [score, setScore] = useState(0);
    const [lastSelection, setLastSelection] = useState<MovieProps | null>(null);
    const [name, setName] = useState("");
    const [nameWasSet, updateNameWasSet] = useState(false);
    const [previousMovies, setPreviousMovies] = useState<MovieProps[]>([]);
    const [currentMovies, setCurrentMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        getNewMovies();
    }, []);
    
    const adjustScoreForSelection = (movie: MovieProps) => {
        setLastSelection(movie);
        setScore(score + movie.revenue - movie.budget);
        setPreviousMovies([...previousMovies, movie]);
        getNewMovies();
    }

    useEffect(() => {
        if (score != 0) {
            updateScore();   
        }
    }, [score]);

    const getNewMovies = async () => {
        try {
            const response = await fetch('/api/movie', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const newMovies = await response.json();
                setCurrentMovies(newMovies);
            } else {
                alert("Failed to fetch movies! Try again.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const updateScore = async () => {
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                score,
                name
            })   
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            alert("Failed to save score! Try again.")
        }
    }

    if (!nameWasSet) {
        // Form to get the name
        return (<><form onSubmit={() => updateNameWasSet(true)}>
            <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value) } />
            <input type="submit" />
        </form>
        </>)
    }
    
    return (<>
              <ScoreSummary score={score} />
              <MovieHistory movies={previousMovies} />
              <MovieSelections movies={currentMovies} adjustScoreForSelection={adjustScoreForSelection} />
            </>)
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      meta: defaultMetaProps,
    },
    revalidate: 10
  };
};
