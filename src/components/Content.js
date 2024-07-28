import React from 'react';
import './Content.css'; // Importer les styles pour le Content

function Content({ message, setMessage, count, setCount }) {
  return (
    <main>
      <p>{message}</p>
      <button onClick={() => setMessage('You clicked the button!')}>Change Message</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </main>
  );
}

export default Content;
