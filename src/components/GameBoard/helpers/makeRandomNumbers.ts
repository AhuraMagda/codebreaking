export const makeRandomNumArray = () => {
  return Array.from({ length: 4 }, () => Math.ceil(Math.random() * 5));
};
