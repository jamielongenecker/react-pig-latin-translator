import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NormalTranslator from './components/NormalTranslator';
import GameMode from './components/GameMode';
import TranscribeSpeech from './components/TranscribeSpeech';

import 'react-tabs/style/react-tabs.css';
import './App.css';

const App = () => {
  const [pigSpinSpeed, setPigSpinSpeed] = useState(20);

  const increasePigSpinSpeed = () => {
    setPigSpinSpeed(pigSpinSpeed * 0.8);
  };

  return (
    <div className="app-container">
      <header className="app-title">English-to-Pig Latin Translator</header>
      <img
        className={`pig-image ${pigSpinSpeed ? 'pig-image-spinning' : ''}`}
        src="/LargePig.png"
        alt="This piggy went to market"
        style={{ animationDuration: `${pigSpinSpeed}s` }}
      />
      <div className="tabs-container">
        <Tabs>
          <div className="tabs-label-container">
            <TabList>
              <Tab>Translate</Tab>
              <Tab>Speech-To-Text</Tab>
              <Tab>Game</Tab>
            </TabList>
          </div>
          <TabPanel>
            <NormalTranslator />
          </TabPanel>
          <TabPanel>
            <TranscribeSpeech />
          </TabPanel>
          <TabPanel>
            <GameMode increasePigSpinSpeed={increasePigSpinSpeed} />
          </TabPanel>
        </Tabs>
      </div>
      <div className="vertical-spacer" />
      <div className="attribution">
        Icons made by{' '}
        <a
          className="attribution-link"
          href="https://www.flaticon.com/authors/hery-mery"
          title="Hery Mery"
        >
          Hery Mery
        </a>{' '}
        and{' '}
        <a
          className="attribution-link"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          className="attribution-link"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default App;
