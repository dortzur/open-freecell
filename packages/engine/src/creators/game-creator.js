import {RANKS, SUITS} from "../constants";
import {createCard} from "./card-creator";
import {gameToString} from "../services/game-service";
import srand from "../utils/srand";
export const createDeck = () => {
  const deck = [];
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      const card = createCard(RANKS[i] + SUITS[j]);
      deck.push(card);
    }
  }
  return deck;
};

export const createGameDeck = (gameNumber) => {
  let deck = createDeck();
  const rand = srand(gameNumber);
  for (let i = deck.length - 1; i > 0; i--) {
    const r = rand() % (i + 1);
    const card = deck[r];
    deck[r] = deck[i];
    deck[i] = card;
  }
  return deck.reverse();
};
export const createGame = (gameNumber) => {
  const deck = createGameDeck(gameNumber);
  const HCS = [[], [], [], []];
  const FCS = [[], [], [], []];
  const CCS = [[], [], [], [], [], [], [], []];

  for (let i = 0; i < deck.length; i++) {
    CCS[i % 8].push(deck[i]);
  }
  const game = {HCS, FCS, CCS};
  game.toString = gameToString.bind(this, game);
  return game;
};
