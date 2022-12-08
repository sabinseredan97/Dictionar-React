import React, { useState } from 'react';
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

  function handleSubmitBtn() {
    if (wordsList.includes(userInput) === true) {
      wordAddedMsg.innerHTML = "This word already exists in the dictionary, please add a different one!";
    } else {
      setWordsList(prevWordsList => {
        return [...prevWordsList, userInput]
      });
      wordAddedMsg.innerHTML = "Your word has been succsessfully added to the dictionary!";
    }
    inputField.value = "";
  }
                            
  return (
    <>
      <div>
        <h1>Dictionary</h1>
        <input type="text" id="inputField" placeholder="Add word" className="inputField" onChange={onChange} />
        <button className="submitBtn" onClick={handleSubmitBtn}>Submit</button>
        <h3 className="prevWord">Previous word: {userInput}</h3>
        <h2 id="wordAddedMsg" className="wordsMsg">Please add a word in the dictionary</h2>
        <br />
        <Search wordsList={wordsList}/>
      </div>
    </>
  );
}

export default App;
