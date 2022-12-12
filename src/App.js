//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import React from "react";

function App() {

    const test = (
        <div>
            <h1>Hello World</h1>
            <p>Lets render this to the DOM</p>
        </div>
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(test);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
  //     </header>
  //   </div>
  //
  // );
}

export default App;
