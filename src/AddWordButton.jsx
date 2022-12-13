import React, { useState } from 'react'

export default function AddWordButton(props) {
  const [userInput, setUserInput] = useState("");

  function onChange(e) {
    setUserInput(e.target.value);
  }

  function AddWordButton() {
    let inputField = document.getElementById("inputField");
    let msgToUser;
    if (userInput !== "") {
      msgToUser = "Your word has been succsessfully added to the dictionary!";
      inputField.value = "";
      setUserInput("");
      return props.handleUserInput(msgToUser, true, userInput);
    } else {
      msgToUser = "Please insert a word before pressing the add button!";
      return props.handleUserInput(msgToUser, false, userInput);
    }
  }

  return (
    <React.Fragment>
      <input type="text" id="inputField" placeholder="Add word" className="inputField" onChange={onChange} />
      <button className="submitBtn" onClick={AddWordButton}>Add word</button>
      <h3 className="prevWord">Previous word: {userInput}</h3>
    </React.Fragment>
  );
}