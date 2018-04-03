import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// component
import Home from './home';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route excat path='/' component={Home} />
            </BrowserRouter>
        );
    }
}