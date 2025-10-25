import { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import Translator from './Translator';
import './component-styles/TranscribeSpeech.css';

const TranscribeSpeech = () => {
  const [transcribedEnglish, setTranscribedEnglish] = useState(``);
  const [transcribedPigLatin, setTranscribedPigLatin] = useState(``);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setTranscribedEnglish(transcript);

    let pigLatinOutput = ``;
    for (const englishWord of transcript.split(' ')) {
      if (englishWord.length === 0) continue;
      pigLatinOutput += ` ` + Translator([englishWord]);
    }
    setTranscribedPigLatin(pigLatinOutput);

    console.log(
      `Received transcription: english=[${transcript}] pigLatin=[${pigLatinOutput}]`
    );
  }, [transcript]);

  const handleRecordingButtonClicked = () => {
    if (!listening) {
      console.log(`Attempting to start recording`);
      SpeechRecognition.startListening({ continuous: true });
    } else {
      console.log(`Attempting to stop recording`);
      SpeechRecognition.stopListening();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Browser does not support speech recognition.</div>;
  }

  return (
    <div>
      <button
        className="recording-button"
        onClick={handleRecordingButtonClicked}
      >
        <span className="recording-button-text">
          {listening ? `Stop Transcribing` : `Transcribe Speech`}
        </span>
      </button>
      {transcribedEnglish.length ? (
        <div className="english-output">English: {transcribedEnglish}</div>
      ) : null}
      {transcribedPigLatin.length ? (
        <div className="pig-latin-output">Pig Latin: {transcribedPigLatin}</div>
      ) : null}
    </div>
  );
};

export default TranscribeSpeech;
