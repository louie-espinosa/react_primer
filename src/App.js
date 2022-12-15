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
    root.render(test)

    //Functional component
    const ChildComponent = () => {
        return (
            <div>
                <p>I am the child</p>
            </div>
        );
    };
    //class component where I compose, or nest the ChildComponent within
    //TODO: How do I use, or call the class?
    class ParentComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>I am the parent</h1>
                    <ChildComponent />

                </div>
            );
        }
    }

    //Nesting components, or composing a component within a component
    const TypesOfFruit = () => {
        return (
            <div>
                <h2>Fruits:</h2>
                <ul>
                    <li>Apples</li>
                    <li>Blueberries</li>
                    <li>Strawberries</li>
                    <li>Bananas</li>
                </ul>
            </div>
        );
    };

    const Fruits = () => {
        return (
            <div>
                { /* Change code below this line */ }
                <TypesOfFruit />
                { /* Change code above this line */ }
            </div>
        );
    };
    //TODO: How do I use or call the class?
    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <h1>Types of Food:</h1>
                    { /* Change code below this line */ }
                    <Fruits />
                    { /* Change code above this line */ }
                </div>
            );
        }
    }

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
