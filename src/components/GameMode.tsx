import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { generate as randomWords } from 'random-words';
import Translator from './Translator';
import SingleWordInput from './SingleWordInput';
import './component-styles/GameMode.css';

interface GameWord {
  englishWord: string;
  pigLatinWord: string;
}

interface GameModeProps {
  increasePigSpinSpeed: () => void;
}

const GameMode = ({ increasePigSpinSpeed }: GameModeProps) => {
  const [isGameModeActivated, setIsGameModeActivated] = useState(true);
  const [gameWord, setGameWord] = useState<GameWord>({
    englishWord: '',
    pigLatinWord: '',
  });
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    const randomWord = randomWords(1)[0];
    setGameWord({
      englishWord: randomWord,
      pigLatinWord: Translator([randomWord]),
    });
  }, [gameScore]);

  const handleTimerExpired = () => {
    console.log(`Game time expired!`);
    setIsGameModeActivated(false);
  };

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 45);

  const { seconds: secondsRemaining } = useTimer({
    expiryTimestamp,
    onExpire: handleTimerExpired,
  });

  const handleSubmitWord = (word: string) => {
    if (word === gameWord.pigLatinWord) {
      console.log(`Correct!`);
      setGameScore(gameScore + 1);
      increasePigSpinSpeed();
    } else {
      console.log(`Incorrect!`);
    }
  };

  return (
    <div className="gameModeContainer">
      <div className="game-state-container">
        <span className="game-score">Score: {gameScore}</span>
        <span className="spacer" />
        <span className="game-time">Time: {secondsRemaining}</span>
      </div>

      {isGameModeActivated ? (
        <div className="prompt">
          Translate:{' '}
          <span className="word-to-type">{gameWord.englishWord}</span>
        </div>
      ) : (
        <div className="prompt">Game Over!</div>
      )}

      <SingleWordInput
        isDisabled={!isGameModeActivated}
        onSubmitWord={handleSubmitWord}
        submitOnEnter={true}
      />
    </div>
  );
};

export default GameMode;
