const starterForm = document.querySelector("#starter-form");
const flourQuantity = document.querySelector("#flour-quantity");

const calculateFlour = (starterValue) => {
  return (starterValue * 100) / 25;
};

starterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const starterValue = e.target[0].value;

  flourQuantity.innerText = calculateFlour(starterValue);
});
