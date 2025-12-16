/**
 * Generates a seeded pseudo-random number between 0 and 1
 *
 * @param seed - The seed value for random generation
 * @returns A pseudo-random number between 0 and 1
 *
 * @example
 * const random1 = seededRandom(42); // Always returns same value for seed 42
 * const random2 = seededRandom(43); // Different value for different seed
 */
export const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};
