const getPrice = (price, discount) => {
  return discount ? price - (price / 100) * discount : price;
};

export { getPrice };
