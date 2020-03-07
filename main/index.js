import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '../components/ToDoApp.js';

function App() {
    return (
        <div>
            <ToDoApp />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)