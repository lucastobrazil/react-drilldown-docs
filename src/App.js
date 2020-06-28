import React, { Component } from 'react';
import Header, { SubHeader } from './components/Header';
import Concept from './components/Concept';
import DrilldownExample, { CustomHeightExample } from './components/DrilldownExample';
import Docs from './components/Docs';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="App-Examples-container">
                    <DrilldownExample />
                    <CustomHeightExample />
                </div>
                <SubHeader />
                <Concept />
                {/* <Docs /> */}
            </div>
        );
    }
}

export default App;
