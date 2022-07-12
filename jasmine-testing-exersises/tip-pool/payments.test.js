describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
        billAmtInput.value = 54.00;
        tipAmtInput.value = 10.00;
    });
  
    it('should add bill amount, tip amount, and tip percent', function () {
      submitPaymentInfo();
    });
      
      
      afterEach(function() {
          // teardown logic
          paymentTbody.remove('tr');
          summaryTds[0].innerHTML = '';
          summaryTds[1].innerHTML = '';
          summaryTds[2].innerHTML = ''; 
    });
});
    