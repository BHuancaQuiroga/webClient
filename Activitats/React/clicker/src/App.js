import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Clicker from './clicker';

class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clicker'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Clicker />
                </div>
            </div>
        );
    }
}

export default App;
