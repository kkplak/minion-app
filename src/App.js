import React, { useState } from 'react';
import axios from 'axios';



export default function App() {
  let [text, setText] = useState("");
  let [minionText, setMinionText] = useState("");

  const onTranslateClick = () => {
    axios
      .post("/translate/minion.json", { text })
      .then(res => {
        const { translated } = res.data.contents;
        setMinionText(translated);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div id='app'>
      <h1>Minion translator</h1>
      <label id='label'>English:</label>
      <br/>
      <input type="text" value={text} onChange={ e => setText(e.target.value)} id="textInput" placeholder="Type your text here..."/>
      <button id='button' onClick={onTranslateClick}>Translate</button>
      <br/>
      <label id='label'>Minion:</label>
      <div id='text'>{minionText}</div>
    </div>
  );
};

