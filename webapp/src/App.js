import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [dog, setDog] = useState("Nothing")

  var getDog = () => {
    axios.get("http://localhost/dog/")
      .then((result) => {
        setDog(result.data)
        console.log(result);
      })
  }

  const buttonStyle = {
    backgroundColor: 'coral',
    padding: '10px',
    borderRadius: '10px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img id="dogimg" src={dog} />
        <button onClick={getDog}
          style={buttonStyle}
        >
          <h2>Click here for a random dog!</h2>
        </button>
        <p>
          <small>Courtesy: <a href="https://placedog.net/">placedog.net</a></small>
        </p>
      </header>
    </div>
  );
}

export default App;
