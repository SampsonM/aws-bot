import React, { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("")

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('sending message! - ', message)
  }

  return (
    <form className="App" onSubmit={sendMessage}>
      <h1>Say hello to your chat funny bot here.</h1>

      <input
        type="text"
        id="messageTofunnyBot"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button type="submit">
        Click to send message to your funn-bot
      </button>
    </form>
  );
}

export default App;
