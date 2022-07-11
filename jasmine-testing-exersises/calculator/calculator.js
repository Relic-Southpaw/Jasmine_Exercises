window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      values = [];
      update();
      e.preventDefault();
    });
  }
});
let values = [];
let monthly = 0;

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
  let amount = 0;
  let years = 0;
  let rate = 0;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values.push(Object.values(getCurrentUIValues()));
  calculateMonthlyPayment();
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
  let p = Object.values(getCurrentUIValues())[0];
  let yTot = Object.values(getCurrentUIValues())[1];
  let yRate = Object.values(getCurrentUIValues())[2];
  let i = (yRate / 100) / 12;
  let n = yTot * 12
  let longPay = ((p * i) / (1 - Math.pow((1 + i), -n)));
  let eachMonth = longPay.toFixed(2);
  monthly = eachMonth;
  updateMonthly();
  console.log(monthly)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  monthly = +monthly || 0;
  const mPay = `the monthly payment will be $${monthly} a month`;
  const mPayment = document.getElementById("monthly-payment");
  mPayment.innerText = mPay;
}