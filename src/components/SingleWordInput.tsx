import { useState } from 'react';
import './component-styles/SingleWordInput.css';

/*
Even though this component is called "SingleWordInput", multiple words can actually be entered.
The concept is that only one word at a time is allowed, and that's determined by entering a space.
However, users can paste text that has multiple words. So we handle both cases in this component.
*/
type SingleWordInputProps = {
  isDisabled: boolean;
  onSubmitWord: (word: string) => void;
  submitOnEnter?: boolean;
};

const SingleWordInput = ({
  isDisabled,
  onSubmitWord,
}: SingleWordInputProps) => {
  const [englishInput, setEnglishInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnglishInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && englishInput.trim().length > 0) {
      onSubmitWord(englishInput.trim());
      setEnglishInput('');
    }
  };

  return (
    <input
      className="input-box"
      value={englishInput}
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      placeholder="This little piggy went to market..."
    />
  );
};

export default SingleWordInput;
