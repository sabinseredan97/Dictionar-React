import React from 'react'

export default function AddWordButton(props) {

  function AddWordButton() {
    let userInput = document.getElementById("inputField");
    let msgToUser;
    if (userInput.value !== "") {
      msgToUser = "Your word has been succsessfully added to the dictionary!";
      return props.handleUserInput(msgToUser, true);
    } else {
      msgToUser = "Please insert a word before pressing the add button!";
      return props.handleUserInput(msgToUser, false);
    }
  }

  return (
    <React.Fragment>
      <button className="submitBtn" onClick={AddWordButton}>Add word</button>
    </React.Fragment>
  );
}