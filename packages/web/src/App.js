import React, {Component} from 'react';
import "./modules/react-playing-cards/playingcards.css";
import './App.css';
import Cell from "./cell.js"
import {Card, ranks, suits}  from "./modules/react-playing-cards"
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

                <div>
                    <Card suit={suits.diamond} rank={ranks.jack}/>
                    <Card suit={suits.diamond} rank={ranks.ace}/>
                </div>
            </div>
        );
    }
}

export default App;
