import React, { Component } from 'react';

import './App.css';
import Content from './components/Content';
import Header from './components/Header';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default App;
