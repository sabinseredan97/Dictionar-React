import React, { useState } from 'react';
import AddWordButton from './AddWordButton';
import Search from './Search';
import "./style.css";

function App() {
  const [wordsList, setWordsList] = useState([]);
  const [userInput, setUserInput] = useState("");
  let inputField = document.getElementById("inputField");
  let wordAddedMsg = document.getElementById("wordAddedMsg");

  function onChange(e) {
    setUserInput(e.target.value);
  }

  function handleUserInput(msgToUser, inputIsValid) {
    if (inputIsValid) {
      if (wordsList.includes(userInput)) {
        wordAddedMsg.innerHTML = "This word already exists in the dictionary, please add a different one!";
      } else {
        setWordsList([...wordsList, userInput]);
        wordAddedMsg.innerHTML = msgToUser;
      }
    } else {
      wordAddedMsg.innerHTML = msgToUser;
    }
    inputField.value = "";
  }
                            
  return (
    <>
      <div>
        <h1>Dictionary</h1>
        <input type="text" id="inputField" placeholder="Add word" className="inputField" onChange={onChange} />
        <AddWordButton handleUserInput={handleUserInput} />
        <h3 className="prevWord">Previous word: {userInput}</h3>
        <h2 id="wordAddedMsg" className="wordsMsg">Please add a word in the dictionary</h2>
        <br />
        <ul className = "listOfWords">
          <Search wordsList={wordsList} />
        </ul>
      </div>
    </>
  );
}

export default App;
