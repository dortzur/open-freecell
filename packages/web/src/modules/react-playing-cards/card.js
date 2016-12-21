import cx from "classnames";
import React from 'react'
const echo = <div className="card">
    <div className="card-ace club">
        <div className="corner top"><span className="number">A</span><span>♣</span></div>
        <span className="suit middle_center">♣</span>
        <div className="corner bottom"><span className="number">A</span><span>♣</span></div>
    </div>
</div>;


export const baba = <div className="card" id="view64">
    <div className="card-queen club">
        <div className="corner top"><span className="number">Q</span><span>♣</span></div>
        <span className="face middle_center"><img src="img/faces/face-queen-club.png"/></span>
        <div className="corner bottom"><span className="number">Q</span><span>♣</span></div>
    </div>
</div>;

export const Card = ({rank, suit}) => {
    return (<div className="card">
        <div className={cx(`card-${rank.name}`, suit.name)}>
            <div className="corner top"><span className="number">{rank.symbol}</span><span>{suit.symbol}</span></div>
            <span className="suit middle_center">{suit.symbol}</span>
            <div className="corner bottom"><span className="number">{rank.symbol}</span><span>{rank.symbol}</span></div>
        </div>
    </div>)
};