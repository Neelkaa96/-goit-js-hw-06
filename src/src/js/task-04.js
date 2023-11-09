const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

function updateCounterView() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterView();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterView();
});

updateCounterView();