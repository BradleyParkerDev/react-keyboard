import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import KeyBoardGrid from './components/KeyBoardGrid';

const TextDisplay = (props) => {

  const { text } =  props;

  return <div>{text}</div>
}



function App() {
  const text = "this is a test"
  return (
    <div className="App">
      <header className="App-header">
       <TextDisplay text={text}/>
       <KeyBoardGrid/>
      </header>
    </div>
  );
}

export default App;
