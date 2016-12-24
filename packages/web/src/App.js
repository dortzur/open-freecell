import React, {Component} from 'react';
import "./modules/react-playing-cards/playingcards.css";
import './App.css';
import "dragula/dist/dragula.css";
import Cell from "./components/cell";
import {Card, ranks, suits}  from "./modules/react-playing-cards"
class App extends Component {

    componentDidMount() {

    }

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
                    <Card suit={suits.club} rank={ranks.jack}/>
                    <Card suit={suits.spade} rank={ranks.nine}/>
                    <Card suit={suits.diamond} rank={ranks.eight}/>
                    <Card suit={suits.club} rank={ranks.three}/>
                    <Card suit={suits.heart} rank={ranks.five}/>
                    <Card suit={suits.spade} rank={ranks.ten}/>
                    <Card suit={suits.diamond} rank={ranks.seven}/>
                </div>
            </div>
        );
    }
}

export default App;
