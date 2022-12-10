import React from 'react';
import ReactDOM from 'react-dom/client';

let JSX = <h1>Hello JSX!</h1>;

JSX = <div><h1>Hello JSX</h1><p></p><ul><li></li><li></li><li></li></ul></div>
JSX = <div>
    {/*This is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
</div>

JSX = <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
</div>

const cNode = ReactDOM.createRoot(document.getElementById('challenge-node'));
cNode.render(JSX);