import React from 'react';
import logo from './logo.svg';
import './App.css';
import {EmployeesView} from "./components/employees/EmployeesView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <EmployeesView />
      </header>
    </div>
  );
}

export default App;
