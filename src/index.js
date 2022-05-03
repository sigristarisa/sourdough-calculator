const starterForm = document.querySelector("#starter-form");
const flourQuantity = document.querySelector("#flour-quantity");
const waterQuantity = document.querySelector("#water-quantity");

const calculateFlour = (starterValue) => {
  return (starterValue * 100) / 25;
};

const calculateWater = (flourValue) => {
  return (flourValue * 62) / 100;
};

starterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const starterValue = e.target[0].value;
  const flourValue = calculateFlour(starterValue);
  const waterValue = calculateWater(flourValue);

  flourQuantity.innerText = flourValue;
  waterQuantity.innerText = waterValue;
});
