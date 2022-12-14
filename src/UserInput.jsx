import React, { useState } from 'react'

export default function UserInput(props) {
  const [userInput, setUserInput] = useState("");

  function onChange(e) {
    setUserInput(e.target.value);
  }

  function handleUserInput() {
    let inputField = document.getElementById("inputField");
    let msgToUser;
    if (inputField.value !== "") {
      msgToUser = "Your word has been succsessfully added to the dictionary!";
      inputField.value = "";
      return props.handleWord(msgToUser, true, userInput);
    } else {
      msgToUser = "Please insert a word before pressing the add button!";
      return props.handleWord(msgToUser, false, userInput);
    }
  }

  return (
    <React.Fragment>
      <input type="text" id="inputField" placeholder="Add word" className="inputField" onChange={onChange} />
      <button className="submitBtn" onClick={handleUserInput}>Add word</button>
      <h3 className="prevWord">Previous word: {userInput}</h3>
    </React.Fragment>
  );
}