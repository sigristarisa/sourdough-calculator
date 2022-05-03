const starterForm = document.querySelector("#starter-form");
const starterInput = document.querySelector("#starter-input");
const flourQuantity = document.querySelector("#flour-quantity");
const waterQuantity = document.querySelector("#water-quantity");

const calculateFlour = (starterValue) => {
  return Math.floor((starterValue * 100) / 25);
};

const calculateWater = (flourValue) => {
  return Math.floor((flourValue * 62) / 100);
};

starterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const starterValue = e.target[0].value;
  const flourValue = calculateFlour(starterValue);
  const waterValue = calculateWater(flourValue);

  flourQuantity.innerText = flourValue + " g";
  waterQuantity.innerText = waterValue + " g";

  starterForm.reset();
});
