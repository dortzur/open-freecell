import React from 'react'

const getCardCenter = (rank, suit) => {
    switch (rank.name) {
        case 'ace':
            return <span className="suit middle_center">{suit.symbol}</span>;
        case 'two':
            return <span><span className="suit top_center">{suit.symbol}</span><span
                className="suit bottom_center">{suit.symbol}</span></span>;
        case 'three':
            return <span><span className="suit top_center">{suit.symbol}</span><span
                className="suit middle_center">{suit.symbol}</span><span
                className="suit bottom_center">{suit.symbol}</span></span>;
        case 'four':
            return <span>  <span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span></span>;
        case 'five':
            return <span><span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_center">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span></span>;
        case 'six':
            return <span> <span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_left">{suit.symbol}</span><span
                className="suit middle_right">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span></span>;
        case 'seven':
            return <span> <span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_left">{suit.symbol}</span><span
                className="suit middle_top">{suit.symbol}</span><span
                className="suit middle_right">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span></span>;
        case 'eight':
            return <span> <span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_left">{suit.symbol}</span><span
                className="suit middle_top">{suit.symbol}</span><span
                className="suit middle_right">{suit.symbol}</span><span
                className="suit middle_bottom">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span></span>;
        case 'nine':
            return <span><span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_top_left">{suit.symbol}</span><span
                className="suit middle_center">{suit.symbol}</span><span
                className="suit middle_top_right">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span><span
                className="suit middle_bottom_left">{suit.symbol}</span><span
                className="suit middle_bottom_right">{suit.symbol}</span></span>;
        case 'ten':
            return <span> <span className="suit top_left">{suit.symbol}</span><span
                className="suit top_right">{suit.symbol}</span><span
                className="suit middle_top_left">{suit.symbol}</span><span
                className="suit middle_top_center">{suit.symbol}</span><span
                className="suit middle_top_right">{suit.symbol}</span><span
                className="suit bottom_left">{suit.symbol}</span><span
                className="suit bottom_right">{suit.symbol}</span><span
                className="suit middle_bottom_center">{suit.symbol}</span><span
                className="suit middle_bottom_left">{suit.symbol}</span><span
                className="suit middle_bottom_right">{suit.symbol}</span></span>;
    }


};

export const NumberCard = ({rank, suit}) => {
    return (
        <div className="card">
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