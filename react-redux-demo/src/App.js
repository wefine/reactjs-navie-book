import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

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
