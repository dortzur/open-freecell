import cx from "classnames";
import React from 'react'

const getCardCenter = (rank, suit) => {
    switch (rank.name) {
        case 'ace':
            return <span className="suit middle_center">{suit.symbol}</span>;
        case 'two':
            return <span><span className="suit top_center">♣</span><span className="suit bottom_center">♣</span></span>;
        case 'three':
            return;
        case 'four':
            return;
        case 'five':
            return;
        case 'six':
            return;
        case 'seven':
            return;
        case 'eight':
            return;
        case 'nine':
            return;
        case 'ten':
            return;
    }


};

export const NumberCard = ({rank, suit}) => {
    return (
        <div className="card" id="view53">
            <div className={`card-${rank.name} ${suit.name}`}>
                <div className="corner top"><span className="number">{rank.symbol}</span><span>{suit.symbol}</span>
                </div>
                {getCardCenter(rank, suit)}
                <div className="corner bottom"><span className="number">{rank.symbol}</span><span>{suit.symbol}</span>
                </div>
            </div>
        </div>
    );
};