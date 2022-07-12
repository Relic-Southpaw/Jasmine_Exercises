
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 10000,
    years: 7,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('141.34')
});


it("should return a result with 2 decimal places", function () {
  // ..
  values = {
    amount: 10000,
    years: 60,
    rate: 60
  }
  expect(calculateMonthlyPayment(values)).toEqual('500.00')
});

/// etc
