let monthly = 0;
let values = {};
window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      update();
      e.preventDefault();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  values = {
    amount: 0,
    years: 0,
    rate: 0
  };
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values.amount = getCurrentUIValues().amount
  values.years = getCurrentUIValues().years
  values.rate = getCurrentUIValues().rate
  calculateMonthlyPayment(values);
  updateMonthly()
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const yTot = values.years;
  const yRate = values.rate;
  let i = (yRate / 100) / 12;
  let n = yTot * 12
  let longPay = ((p * i) / (1 - Math.pow((1 + i), -n)));
  let eachMonth = longPay.toFixed(2);
  monthly = eachMonth;
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  monthly = +monthly || 0;
  monthly = monthly.toFixed(2);
  const mPay = `the monthly payment will be $${monthly} a month`;
  const mPayment = document.getElementById("monthly-payment");
  mPayment.innerText = mPay;
}