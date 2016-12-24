import vorpal from "vorpal";
import _rand from "lodash/random";
import {moveToColumnCell, moveToFreeCell, moveToHomeCell, newGame, printGame, gameToString} from "open-freecell-engine";
import configureStore from "./state/configureStore";
const store = configureStore();
const cli = vorpal();

cli.delimiter('freecell$');


cli.command("start [number]", "start a new game. Optionally specify game number").action(async(args) => {
  if (!args.number) args.number = _rand(1, 1000);
  console.log(`starting game number ${args.number}`);
  store.dispatch(newGame(args.number));
  cli.ui.redraw(gameToString(store.getState().game));
  cli.ui.redraw.done();
});
cli.command("home <card> <cellNumber>", "move a specified card to home cells 1-4. Example: home AS 1")
  .alias('h').action(async(args) => {
  store.dispatch(moveToHomeCell(args.card.toUpperCase(), args.cellNumber - 1));
  cli.ui.redraw(gameToString(store.getState().game));
  cli.ui.redraw.done();
});
cli.command("free <card> <cellNumber>", "move a specified card to free cells 1-4. Example: free AS 1")
  .alias('f').action(async(args) => {
  store.dispatch(moveToFreeCell(args.card.toUpperCase(), args.cellNumber - 1));
  cli.ui.redraw(gameToString(store.getState().game));
  cli.ui.redraw.done();
});

cli.show();
