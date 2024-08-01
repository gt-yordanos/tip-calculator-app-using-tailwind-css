document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const billInput = document.querySelector("#bill");
  const tipButtons = document.querySelectorAll(".tip-btn");
  const customTipInput = document.querySelector("#custom-tip-input");
  const peopleInput = document.querySelector("#people-input");
  const tipAmountDisplay = document.querySelector("#tip-amount span");
  const totalDisplay = document.querySelector("#total span");
  const resetButton = document.querySelector("#reset-button");

  let billAmount = 0;
  let tipPercentage = 0;
  let numberOfPeople = 0;

  // Helper function to calculate and update the display
  function calculateAndUpdate() {
    if (billAmount > 0 && tipPercentage > 0 && numberOfPeople > 0) {
      const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
      const totalAmount = (billAmount / numberOfPeople) + tipAmount;

      tipAmountDisplay.textContent = `${tipAmount.toFixed(2)}`;
      totalDisplay.textContent = `${totalAmount.toFixed(2)}`;
      resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
  }

  // Check if all inputs are greater than 0 and call calculateAndUpdate
  function checkAndCalculate() {
    if (billAmount > 0 && tipPercentage > 0 && numberOfPeople > 0) {
      calculateAndUpdate();
    } else {
      tipAmountDisplay.textContent = "0.00";
      totalDisplay.textContent = "0.00";
    }
  }

  // Event listener for bill input
  billInput.addEventListener("input", () => {
    billAmount = parseFloat(billInput.value) || 0;
    checkAndCalculate();
  });

  // Event listeners for tip buttons
  tipButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class and background color from all buttons
      tipButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.style.backgroundColor = ""; // Reset background color
      });

      // Add active class and background color to the clicked button
      button.classList.add("active");
      button.style.backgroundColor = "hsl(172, 67%, 45%)"; // Set active background color

      // Update tip percentage and recalculate
      tipPercentage = parseFloat(button.dataset.tip) || 0;
      customTipInput.value = ""; // Clear custom input
      checkAndCalculate();
    });
  });

  // Event listener for custom tip input
  customTipInput.addEventListener("input", () => {
    tipButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Reset background color
    });

    tipPercentage = parseFloat(customTipInput.value) || 0;
    checkAndCalculate();
  });

  // Event listener for number of people input
  peopleInput.addEventListener("input", () => {
    numberOfPeople = parseInt(peopleInput.value) || 0;
    if (numberOfPeople === 0) {
      document.querySelector('#people-error').textContent = "Can't be zero";
      peopleInput.style.outline = "2px solid rgb(255, 100, 100)";
    } else {
      document.querySelector('#people-error').textContent = ""; // Clear error message
      peopleInput.style.outline = "2px solid hsl(172, 67%, 45%)";
      checkAndCalculate();
    }
  });

  // Event listener for reset button
  resetButton.addEventListener("click", () => {
    billInput.value = "";
    customTipInput.value = "";
    peopleInput.value = "";
    billAmount = 0;
    tipPercentage = 0;
    numberOfPeople = 0;
    tipButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Reset background color
    });
    tipAmountDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";
    resetButton.style.backgroundColor = "hsl(185, 41%, 84%)";
  });
});
