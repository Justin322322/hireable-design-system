import { CARD_DIMENSIONS, STACK_CONFIG } from "./constants";

export const useStackAnimation = () => {
  const { bottomCardY } = CARD_DIMENSIONS;
  const { stackOffset, scaleDecrement } = STACK_CONFIG;

  const getStackStyle = (stackPosition: number) => ({
    scale: 1 - stackPosition * scaleDecrement,
    y: bottomCardY + stackPosition * stackOffset,
  });

  return { getStackStyle };
};
