import React from 'react'

export default function AddButton(props) {

  function addWord() {
    let userInput = document.getElementById("inputField");
    let msgToUser;
    if (userInput.value !== "") {
        msgToUser = "Your word has been succsessfully added to the dictionary!";
        return props.sendMsgToParent(msgToUser, true);
    } else {
        msgToUser = "Please insert a word before pressing the add button!";
        return props.sendMsgToParent(msgToUser, false);
    }
  }

  return (
    <React.Fragment>
      <button className="submitBtn" onClick={addWord}>Add word</button>
    </React.Fragment>
  );
}