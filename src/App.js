import React, { useState } from 'react';
import './App.css'; // Importer le fichier CSS
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState('Hello World');
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header title="Debug React App" />
      <Content message={message} setMessage={setMessage} count={count} setCount={setCount} />
      <Footer year={2024} />
    </div>
  );
}

export default App;
