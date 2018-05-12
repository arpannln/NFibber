describe("when Fibonacci is used to peform calculations", function(){

  //Spec for sum operation
  it("should be able to calculate 3rd Fibonacci", function() {
      expect(returnNthFib(3)).toEqual(2);
  });

  //Spec for multiply operation
  it("should be able to calculate 5th Fibonacci", function() {
      expect(returnNthFib(5)).toEqual(5);
  });

  it("should be able to calculate larger Fibonaccis", function() {
      expect(returnNthFib(100)).toEqual(354224848179261915075);
  });
  //Spec for factorial operation for positive number
  it("should return null when input is negative", function() {
      expect(returnNthFib(-6)).toEqual(null);
  });

  // returnNthFib(100);

  //Spec for factorial operation for negative number


});
