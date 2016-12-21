import cx from "classnames";
import React from 'react'
import {FaceCard}from "./card-templates/face-card";

const isFaceCard = (rank) => ['king', 'queen', 'jack'].includes(rank.name);
export const Card = ({rank, suit}) => {
    if (isFaceCard(rank)) {
        return <FaceCard rank={rank} suit={suit}/>
    }
    return <div />

};