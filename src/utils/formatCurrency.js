let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatCurrency(number) {
  return DOLLAR.format(number);
}

export { formatCurrency };
