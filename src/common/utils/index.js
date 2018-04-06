export const srand = (seed) => () => {
  seed = (seed * 214013 + 2531011) & 0x7fffffff;
  return seed >> 16;
};
