const srand = (seed) => () => {
  seed = (((seed * 214013 + 2531011) & 0x7FFFFFFF));
  return seed >> 16;
};
export default srand;
