import React, { useState } from 'react';
import UserInput from './UserInput';
import Search from './Search';
import "./style.css";

function App() {
  const [wordsList, setWordsList] = useState([]);
  const [msgForUser, setMsgForUser] = useState("Please add a word in the dictionary!");

  function handleWord(msgToUser, inputIsValid, userInput) {
    if (inputIsValid) {
      if (wordsList.includes(userInput)) {
        setMsgForUser("This word already exists in the dictionary, please add a different one!");
      } else {
        setWordsList([...wordsList, userInput]);
        setMsgForUser(msgToUser);
      }
    } else {
      setMsgForUser(msgToUser);
    }
  }
                            
  return (
    <>
      <div>
        <h1>Dictionary</h1>
        <UserInput handleWord={handleWord} />
        <h2 className="wordsMsg">{msgForUser}</h2>
        <br />
        <ul className = "listOfWords">
          <Search wordsList={wordsList} />
        </ul>
      </div>
    </>
  );
}

export default App;