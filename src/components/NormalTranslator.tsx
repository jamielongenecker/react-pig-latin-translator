import { useState } from 'react';
import Translator from './Translator';
import SingleWordInput from './SingleWordInput';
import './component-styles/NormalTranslator.css';

const NormalTranslator = () => {
  const [pigLatinOutput, setPigLatinOutput] = useState(``);
  const [animatingWords, setAnimatingWords] = useState<string[]>([]);

  const handleSubmitWord = (word: string) => {
    console.log(`handleSubmitWord: word=[${word}]`);

    const translatedWord = Translator(word);

    // Because this can be called into a loop, and we want to ensure that ALL
    // updates to the state aren't batched into a single call, use the state
    // updater syntax. https://stackoverflow.com/a/66560573/4493426
    setPigLatinOutput((previousState) => `${previousState} ${translatedWord}`);
    setAnimatingWords((previousState) => [...previousState, translatedWord]);
    console.log(
      `handleSubmitWord: word=[${word}] translatedWord=[${translatedWord}]`
    );
  };

  const animatedWords = [];
  for (const word of animatingWords) {
    animatedWords.push(<div className="animated-word">{word}</div>);
  }

  return (
    <div>
      <SingleWordInput onSubmitWord={handleSubmitWord} isDisabled={false} />
      <div className="translated-output">{pigLatinOutput}</div>
      <div className="animation-container">{animatedWords}</div>
    </div>
  );
};

export default NormalTranslator;
