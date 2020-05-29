import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PoemMaker from './poemMaker'

function App() {

  const [count, setCount] = useState(2);
  const poemMaker = new PoemMaker(5);
  const poem = poemMaker.makePoem(count);
  console.log(poem);
  const items = [];
  for (const [index, value] of poem.entries()) {
    items.push(<p key={index}>{value}</p>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          صانع الأشعار
        </p>
        <input
        className="App-input"
          name="عدد الجمل"
          type="number"
          value={count}
          onChange={(event) => { setCount(event.target.value) }}
        />
        <h2>
          {items}
        </h2>
      </header>
    </div>
  );
}

export default App;
