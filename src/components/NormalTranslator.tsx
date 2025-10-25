import { useState } from 'react';
import Translator from './Translator';
import './component-styles/NormalTranslator.css';

const NormalTranslator = () => {
  const [inputText, setInputText] = useState('');
  const [pigLatinOutput, setPigLatinOutput] = useState('');
  const [animatingWords, setAnimatingWords] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const words = inputText.trim().split(/\s+/).filter(Boolean);
      const translated = Translator(words);
      setPigLatinOutput(translated);
      setAnimatingWords(words.map((word) => Translator([word])));
      setInputText('');
    }
  };

  const animatedWords = animatingWords.map((word, idx) => (
    <div className="animated-word" key={idx}>
      {word}
    </div>
  ));

  return (
    <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
      <input
        className="input-box"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type word(s) and press Enter to translate..."
        style={{ marginBottom: '1rem' }}
      />
      <div className="translated-output">{pigLatinOutput}</div>
      <div className="animation-container">{animatedWords}</div>
    </div>
  );
};

export default NormalTranslator;
