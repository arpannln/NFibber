describe("when Fibonacci is used to peform calculations", function(){

  let start1 = performance.now();
  returnNthFib(5000);
  let start2 = performance.now();
  returnNthFib(5001);
  let end = performance.now();

  let calculate5000Duration = start2 - start1;
  let calculate5001Duration = end - start2;

  it("should calculate 101st number faster once calculating 100th number", function() {
      expect(calculate5000Duration - calculate5001Duration > 0).toEqual(true);
  });

  let start3 = performance.now();
  returnNthFib(5000);
  let recalculate5000Duration = performance.now() - start3;

  it("should take constant time to return an already solved nth Fib", function() {
      expect(recalculate5000Duration < calculate5000Duration).toEqual(true);
  });

 
  it("should be able to calculate 3rd Fibonacci", function() {
      expect(returnNthFib(3)).toEqual(2);
  });

 
  it("should be able to calculate 5th Fibonacci", function() {
      expect(returnNthFib(5)).toEqual(5);
  });

  it("should be able to calculate larger Fibonaccis", function() {
      expect(returnNthFib(100)).toEqual(354224848179262000000);
  });
  
  it("should return null when input is negative", function() {
      expect(returnNthFib(-6)).toEqual(null);
  });





  


});
