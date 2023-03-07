import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import KeyBoardGrid from './components/KeyBoardGrid';





const TextDisplay = (props) => {

  const { text } =  props;

  return <div>{text}</div>
}



function App() {
  
  const [text, setText] =  useState("");

  const textHandler = (keyObj, keyEvent) => {
    
    //key up event -> key is released 
    if (keyEvent === "KeyUp") {
      // handle the key up event
      return; 
    } 
    if(keyEvent === "KeyDown") {
       
       const newTextValue = text + keyObj.letter.toLowerCase();
       setText(newTextValue);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <TextDisplay text={text}/>
       <KeyBoardGrid textHandler={textHandler} />
      </header>
    </div>
  );
}

export default App;
