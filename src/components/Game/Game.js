import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import SadBanner from '../SadBanner/SadBanner';
import HappyBanner from '../HappyBanner/HappyBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  // game statuses: running / won / lost
  const [gameStatus, setGameStatus] = React.useState('running');

  function addNewGuess(guess) {
    const nextResults = [...results, guess]; 
    setResults(nextResults);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return ( 
    <>
      <GuessResults 
        results={results} 
        answer={answer} 
      />
      <GuessInput 
        addNewGuess={addNewGuess} 
        gameStatus={gameStatus}
      />
      { gameStatus === 'lost' && <SadBanner answer={answer} /> }
      { gameStatus === 'won' && <HappyBanner numOfTries={results.length} /> }
    </>
  );
}

export default Game;
