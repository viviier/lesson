import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                hello, react webpack no cli
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);