import React from "react";
import "./App.css";
import ScalesExercise from "./ScalesExercise";

const onReload = () => window.location.reload();
const Reload = () => <button onClick={onReload}>Reload</button>;

function App() {
  return (
    <div className="App">
      <ScalesExercise />
      <Reload />
    </div>
  );
}

export default App;
