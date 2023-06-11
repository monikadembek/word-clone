import React from "react";

function GuessInput() {

  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();    
    console.log('guess: ', guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input 
        type="text" 
        id="guess-input" 
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
