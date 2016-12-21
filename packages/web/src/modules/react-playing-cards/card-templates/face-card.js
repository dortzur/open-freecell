import React from 'react'

export const FaceCard = ({rank, suit}) => {
    return (
        <div className="card">
            <div className={`card-${rank.name} ${suit.name}`}>
                <div className="corner top"><span className="face">{rank.symbol}</span><span>{suit.symbol}</span></div>
                <span className="face middle_center"><img
                    src={require(`../img/faces/face-${rank.name}-${suit.name}.png`)}/></span>
                <div className="corner bottom"><span className="face">{rank.symbol}</span><span>{suit.symbol}</span>
                </div>
            </div>
        </div>
    )
};