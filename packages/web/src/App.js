import React, {Component} from 'react';
import "./modules/react-playing-cards/playingcards.css";
import './app.css';
import Cell from "./components/cell";
import {Card, ranks, suits}  from "./modules/react-playing-cards"
import {DraggableCard} from "./components/dnd/card-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {DragDropContext} from "react-dnd";
@DragDropContext(HTML5Backend)
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
                    <DraggableCard suit={suits.club} rank={ranks.jack}/>
                    <DraggableCard suit={suits.spade} rank={ranks.nine}/>
                    <DraggableCard suit={suits.diamond} rank={ranks.eight}/>
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
