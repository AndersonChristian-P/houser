import React from 'react';
import Header from "./Components/Header/Header"
import Dashboard from "./Components/Dashboard"
import Wizard from "./Components/Wizard"
import './App.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Dashboard />
      <Wizard />

    </div>
  );
}

export default App;
