"use client";

import { motion } from "framer-motion";
import { ChatCardContent } from "./ChatCard";
import {
  ANIMATION_TIMING,
  CARD_BASE_STYLE,
  CARD_DIMENSIONS,
  CONVERSATION_CARDS,
} from "./constants";
import { useStackAnimation } from "./useStackAnimation";

interface TalentChatMessagesProps {
  shouldAnimate: boolean;
}

export const TalentChatMessages = ({
  shouldAnimate,
}: TalentChatMessagesProps) => {
  const { getStackStyle } = useStackAnimation();
  const {
    width: cardWidth,
    height: cardHeight,
    topCardY,
    bottomCardY,
    offScreenX,
  } = CARD_DIMENSIONS;
  const {
    enterDuration,
    resetDuration,
    card2EnterDelay,
    card3EnterDelay,
    card4EnterDelay,
    card5EnterDelay,
  } = ANIMATION_TIMING;

  const cardClassName =
    "absolute flex items-start gap-3 rounded-[12px] border border-[#C3C3C3] p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]";
  const cardStyle = {
    ...CARD_BASE_STYLE,
    width: cardWidth,
    height: cardHeight,
    transformOrigin: "center top",
  };

  return (
    <div className="relative flex h-[264px] w-[408px] items-center justify-center overflow-hidden rounded-lg bg-white">
      {/* Card 1 - starts at top, moves to bottom stack */}
      <motion.div
        className={cardClassName}
        style={{
          ...cardStyle,
          left: `calc(50% - ${cardWidth / 2}px - 0.5px)`,
        }}
        initial={{ top: topCardY, scale: 1, filter: "blur(0px)", zIndex: 10 }}
        animate={{
          top: shouldAnimate
            ? [
                topCardY,
                topCardY,
                bottomCardY,
                bottomCardY,
                getStackStyle(1).y,
                getStackStyle(1).y,
                getStackStyle(2).y,
                getStackStyle(2).y,
                getStackStyle(3).y,
              ]
            : topCardY,
          scale: shouldAnimate
            ? [
                1,
                1,
                1,
                1,
                getStackStyle(1).scale,
                getStackStyle(1).scale,
                getStackStyle(2).scale,
                getStackStyle(2).scale,
                getStackStyle(3).scale,
              ]
            : 1,
          filter: "blur(0px)",
          zIndex: 10,
        }}
        transition={{
          top: shouldAnimate
            ? {
                duration: 3.5,
                delay: 0,
                ease: "easeInOut",
                times: [0, 0.085, 0.2, 0.34, 0.457, 0.6, 0.714, 0.857, 0.97],
              }
            : { duration: resetDuration },
          scale: shouldAnimate
            ? {
                duration: 3.5,
                delay: 0,
                ease: "easeInOut",
                times: [0, 0.085, 0.2, 0.34, 0.457, 0.6, 0.714, 0.857, 0.97],
              }
            : { duration: resetDuration },
          filter: { duration: 0.3, delay: shouldAnimate ? 0.1 : 0 },
        }}
      >
        <ChatCardContent card={CONVERSATION_CARDS[0]} />
      </motion.div>

      {/* Card 2 - enters from right */}
      <motion.div
        className={cardClassName}
        style={cardStyle}
        initial={{
          left: offScreenX,
          top: topCardY,
          scale: 1,
          opacity: 0,
          zIndex: 11,
        }}
        animate={{
          left: shouldAnimate
            ? [offScreenX, `calc(50% - ${cardWidth / 2}px - 0.5px)`]
            : offScreenX,
          top: shouldAnimate
            ? [
                topCardY,
                topCardY,
                topCardY,
                bottomCardY,
                bottomCardY,
                getStackStyle(1).y,
                getStackStyle(1).y,
                getStackStyle(2).y,
              ]
            : topCardY,
          scale: shouldAnimate
            ? [
                1,
                1,
                1,
                1,
                1,
                getStackStyle(1).scale,
                getStackStyle(1).scale,
                getStackStyle(2).scale,
              ]
            : 1,
          opacity: shouldAnimate ? 1 : 0,
          zIndex: 11,
        }}
        transition={{
          left: shouldAnimate
            ? {
                duration: enterDuration,
                delay: card2EnterDelay,
                ease: "easeOut",
              }
            : { duration: resetDuration },
          opacity: shouldAnimate
            ? { duration: 0.3, delay: card2EnterDelay }
            : { duration: resetDuration },
          top: shouldAnimate
            ? {
                duration: 2.7,
                delay: card2EnterDelay,
                ease: "easeInOut",
                times: [0, 0.148, 0.185, 0.333, 0.518, 0.666, 0.851, 1],
              }
            : { duration: resetDuration },
          scale: shouldAnimate
            ? {
                duration: 2.7,
                delay: card2EnterDelay,
                ease: "easeInOut",
                times: [0, 0.148, 0.185, 0.333, 0.518, 0.666, 0.851, 1],
              }
            : { duration: resetDuration },
        }}
      >
        <ChatCardContent card={CONVERSATION_CARDS[1]} />
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className={cardClassName}
        style={cardStyle}
        initial={{
          left: offScreenX,
          top: topCardY,
          scale: 1,
          opacity: 0,
          zIndex: 12,
        }}
        animate={{
          left: shouldAnimate
            ? [offScreenX, `calc(50% - ${cardWidth / 2}px - 0.5px)`]
            : offScreenX,
          top: shouldAnimate
            ? [
                topCardY,
                topCardY,
                topCardY,
                bottomCardY,
                bottomCardY,
                getStackStyle(1).y,
              ]
            : topCardY,
          scale: shouldAnimate ? [1, 1, 1, 1, 1, getStackStyle(1).scale] : 1,
          opacity: shouldAnimate ? 1 : 0,
          zIndex: 12,
        }}
        transition={{
          left: shouldAnimate
            ? {
                duration: enterDuration,
                delay: card3EnterDelay,
                ease: "easeOut",
              }
            : { duration: resetDuration },
          opacity: shouldAnimate
            ? { duration: 0.3, delay: card3EnterDelay }
            : { duration: resetDuration },
          top: shouldAnimate
            ? {
                duration: 1.8,
                delay: card3EnterDelay,
                ease: "easeInOut",
                times: [0, 0.222, 0.277, 0.5, 0.777, 1],
              }
            : { duration: resetDuration },
          scale: shouldAnimate
            ? {
                duration: 1.8,
                delay: card3EnterDelay,
                ease: "easeInOut",
                times: [0, 0.222, 0.277, 0.5, 0.777, 1],
              }
            : { duration: resetDuration },
        }}
      >
        <ChatCardContent card={CONVERSATION_CARDS[2]} />
      </motion.div>

      {/* Card 4 */}
      <motion.div
        className={cardClassName}
        style={{ ...cardStyle, zIndex: 13 }}
        initial={{ left: offScreenX, top: topCardY, opacity: 0 }}
        animate={{
          left: shouldAnimate
            ? [offScreenX, `calc(50% - ${cardWidth / 2}px - 0.5px)`]
            : offScreenX,
          top: shouldAnimate
            ? [topCardY, topCardY, topCardY, bottomCardY]
            : topCardY,
          opacity: shouldAnimate ? 1 : 0,
        }}
        transition={{
          left: shouldAnimate
            ? {
                duration: enterDuration,
                delay: card4EnterDelay,
                ease: "easeOut",
              }
            : { duration: resetDuration },
          opacity: shouldAnimate
            ? { duration: 0.3, delay: card4EnterDelay }
            : { duration: resetDuration },
          top: shouldAnimate
            ? {
                duration: 0.9,
                delay: card4EnterDelay,
                ease: "easeInOut",
                times: [0, 0.444, 0.555, 1],
              }
            : { duration: resetDuration },
        }}
      >
        <ChatCardContent card={CONVERSATION_CARDS[3]} />
      </motion.div>

      {/* Card 5 - final card, stays at top */}
      <motion.div
        className={cardClassName}
        style={{ ...cardStyle, top: topCardY, zIndex: 14 }}
        initial={{ left: offScreenX, opacity: 0 }}
        animate={{
          left: shouldAnimate
            ? `calc(50% - ${cardWidth / 2}px - 0.5px)`
            : offScreenX,
          opacity: shouldAnimate ? 1 : 0,
        }}
        transition={{
          left: shouldAnimate
            ? {
                duration: enterDuration,
                delay: card5EnterDelay,
                ease: "easeOut",
              }
            : { duration: resetDuration },
          opacity: shouldAnimate
            ? { duration: 0.3, delay: card5EnterDelay }
            : { duration: resetDuration },
        }}
      >
        <ChatCardContent card={CONVERSATION_CARDS[4]} />
      </motion.div>
    </div>
  );
};
