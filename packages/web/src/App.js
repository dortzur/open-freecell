import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from "./cell.js"
class App extends Component {
    render() {
        return (
            <div>
                <div className="free-cells">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
                <div className="home-cells">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>

                <div className="column-cells">
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
            </div>
        );
    }
}

export default App;
