const mathOperations = require('./calculator');

// describe block is the container for all the tests for that test file
// The individual test block represents a single test.
// expect - an assertion 
describe('Calculator tests', () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1,2)).toBe(3);
    }); 

    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum(1,2)
      
        // assert
        expect(result).toBe(3);
      });

      test('subtracting 5 from 10 should return 5', () => {
          var result = mathOperations.sub(10,5)
          expect(result).toBe(5)
      });

      test('multiplying 7*8 should return 56', () => {
          var result = mathOperations.multiply(7,8)
          expect(result).toBe(56)
      })
}); 

