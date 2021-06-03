import React, { useState, useCallback} from 'react';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  console.log('App Running');
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowtoggle, setAllowtoggle] = useState(false);

  const toggleParagraphHandler = useCallback (() => {
    if (allowtoggle){
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowtoggle])

  const allowtoggleHandler = () =>{
    setAllowtoggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowtoggleHandler}>Allow Toggle Paragraph</Button>
    </div>
  );
}

export default App;
