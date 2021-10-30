export const getDrinks = (drinksData) => {
  return fetch("/options", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drinksData),
  });
};
