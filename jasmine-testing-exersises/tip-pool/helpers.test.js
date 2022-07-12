describe("helper's test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      allPayments ={};
      allPayments ={
        payment1:{
            billAmt: "98.76",
            tipAmt: "14.24",
            tipPercent: 14
        }, payment2: {
            billAmt: "54",
            tipAmt: "10",
            tipPercent: 19
        }
    }
})
it('both payments should be added together', function(){
    updateSummary();
    expect(summaryTds[0].innerHTML).toEqual('$152.76');
    expect(summaryTds[1].innerHTML).toEqual('$24.240000000000002');
    expect(summaryTds[2].innerHTML).toEqual('17%');
})

afterEach(function() {
    // teardown logic
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = ''; 
    allPayments={};
  });
});