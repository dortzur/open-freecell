import _takeRightWhile from "lodash/takeRightWhile";
import {areCardsStackable} from "./card-service";
export const getSortedSubStack = (stack) =>
  _takeRightWhile(stack, (card, index, stack) => {
    if (index == 0 || index == stack.length - 1) return true;
    return areCardsStackable(card, stack[index - 1])
  });
export const isSortedStack = (stack) => {
  const subStack = getSortedSubStack(stack);
  return stack.length == subStack.length;
};
export const hasEnoughMoves = (stack, availableMoves) => availableMoves >= stack.length;
export const isMovableStack = (stack, availableMoves) => {
  return isSortedStack(stack) && hasEnoughMoves(stack, availableMoves)
};
export const areStacksStackable = (sourceStack, targetStack) => {
  return areCardsStackable(sourceStack[0], targetStack[targetStack.length - 1]);
};

