import React, {useState} from 'react';
import './App.css';
import BoxForm from './components/boxForm.js';
import BoxDisplay from './components/boxDisplay.js';

function App() {
  const [newBox, setNewBox] = useState({
    colors: [],
  });

  return (
    <div className="App">
      <div>
        <h1>Box Generator</h1>  
        <BoxForm setNewBox={setNewBox} newBox={newBox} />
        <div>
          {newBox.colors.map((color, i) => (
            <BoxDisplay color={color} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;