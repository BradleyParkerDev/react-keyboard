import { useState } from 'react';

//represents a keyboard key
const KeyBoardKey = (props) => {
    const { keyObj } = props 
    const {letter, isPressed } = keyObj
    const keyClass = isPressed === true ? "pressed" : "released";

    return (
        <div className={`Keyboard-key ${keyClass}`}>{props.keyObj.letter}</div>
    )
}

// represents a keyboard row
const KeyBoardRow = (props) => {
    return (
        <div className="Keyboard-row">
            {props.keyRow.map((keyObj, index) => {
                return <KeyBoardKey keyObj={keyObj} key={index}/>
            })}
        </div>
    )
}

// represents the whole keyboard 
const KeyBoardGrid = (props) => {

  const { textHandler } = props;
  //keep track of which keys are pressed 
  const keyBoardArr = [
    [
      { letter: "`", isPressed: false },
      { letter: "1", isPressed: false },
      { letter: "2", isPressed: false },
      { letter: "3", isPressed: false },
      { letter: "4", isPressed: false },
      { letter: "5", isPressed: false },
      { letter: "6", isPressed: false },
      { letter: "7", isPressed: false },
      { letter: "8", isPressed: false },
      { letter: "9", isPressed: false },
      { letter: "0", isPressed: false },
      { letter: "-", isPressed: false },
      { letter: "=", isPressed: false },
      { letter: "Backspace", isPressed: false },
    ],
    [
      { letter: "Tab", isPressed: false },
      { letter: "Q", isPressed: false },
      { letter: "W", isPressed: false },
      { letter: "E", isPressed: false },
      { letter: "R", isPressed: false },
      { letter: "T", isPressed: false },
      { letter: "Y", isPressed: false },
      { letter: "U", isPressed: false },
      { letter: "I", isPressed: false },
      { letter: "O", isPressed: false },
      { letter: "P", isPressed: false },
      { letter: "[", isPressed: false },
      { letter: "]", isPressed: false },
      { letter: "\\", isPressed: false },
    ],
    [
      { letter: "CapsLock", isPressed: false },
      { letter: "A", isPressed: false },
      { letter: "S", isPressed: false },
      { letter: "D", isPressed: false },
      { letter: "F", isPressed: false },
      { letter: "G", isPressed: false },
      { letter: "H", isPressed: false },
      { letter: "J", isPressed: false },
      { letter: "K", isPressed: false },
      { letter: "L", isPressed: false },
      { letter: ";", isPressed: false },
      { letter: "'", isPressed: false },
      { letter: "Enter", isPressed: false },
    ],
    [
      { letter: "Shift", isPressed: false },
      { letter: "Z", isPressed: false },
      { letter: "X", isPressed: false },
      { letter: "C", isPressed: false },
      { letter: "V", isPressed: false },
      { letter: "B", isPressed: false },
      { letter: "N", isPressed: false },
      { letter: "M", isPressed: false },
      { letter: ",", isPressed: false },
      { letter: ".", isPressed: false },
      { letter: "/", isPressed: false },
      { letter: "Shift", isPressed: false },
    ],
    [{ letter: " ", isPressed: false }],
  ]; 

  //create hook to manipulate key rows
  const [keyRows, setKeyRows] = useState(keyBoardArr); 

  //handle changes to keyboard 

  const handleKeyUp = (event) => {
     // let's find which key the event happened by 
     // iterating over the keyboard.  
     let keyRowsCopy = [...keyRows];
     keyRowsCopy = keyRowsCopy.map((keyRows) => {


          //use map to modify keyboard each key at a time
          const updatedKeyRow = keyRows.map((keyObj) => {
            
              //find letter to modify comparing it to where the event occurred
              if(event.key.toLowerCase() === keyObj.letter.toLowerCase()){
                  
                  //call handler for setting the text 
                  textHandler(keyObj, "KeyUp");
                  return {
                    ...keyObj,
                    isPressed: false,
                  }
              }
          })
      //return each updated row 
      return updatedKeyRow;
     });

     //update the state 
     setKeyRows(keyRowsCopy);

  }

  const handleKeyDown = (event) => {
    // let's find which key the event happened by 
    // iterating over the keyboard.  
    let keyRowsCopy = [...keyRows];
    keyRowsCopy = keyRowsCopy.map((keyRows) => {


         //use map to modify keyboard each key at a time
         const updatedKeyRow = keyRows.map((keyObj) => {
           
             //find letter to modify comparing it to where the event occurred
             if(event.key.toLowerCase() === keyObj.letter.toLowerCase()){
                 
                 //call handler for setting the text 
                 textHandler(keyObj, "KeyDown");
                 return {
                   ...keyObj,
                   isPressed: true,
                 }
             }
         })
     //return each updated row 
     return updatedKeyRow;
    });

    //update the state 
    setKeyRows(keyRowsCopy);

 }
 
  return (
    <div className="Keyboard-grid"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}>  
        {keyRows.map((keyRow, index ) => {
            return <KeyBoardRow keyRow={keyRow} key={index} />
        })}
    </div>

  );
}


export default KeyBoardGrid