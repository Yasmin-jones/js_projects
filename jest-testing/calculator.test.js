const exp = require('constants');
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
        // use tobe to test exact equality 
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

      //matchers 
      test('adding 20 + 5', () => {
          var result = mathOperations.sum(20,5)
          expect(result).not.toBe(22)

      })
    }); 

    describe('other matchers in jest', () =>  { 
      // use toEqual to check the value of the object 
      // toEqual recursively checks every field of an object or array.

      test('object assignment', () => {
          const data = {one: 1};
          data['two'] = 2;
          expect(data).toEqual({one: 1, two: 2}); 
      })

      // Truthiness

      test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
      });
      
      test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
      });

      test('10 + 10', () => {
          const value = 10 + 10;
          expect(value).toBeGreaterThan(10);
          expect(value).toBeGreaterThanOrEqual(3.5);
          expect(value).toBeLessThan(21);
          expect(value).toBeLessThanOrEqual(20.5);

          // toBe and toEqual are equivalent for numbers
          expect(value).toBe(20);
           expect(value).toEqual(20);
      });

      // floating points - use toBeCloseTo to avoid rounding error
      test('adding two floating point numbers', () => {
          const valueTwo = 0.5 + 0.2
          expect(valueTwo).toBeCloseTo(0.7);
      });

      //stings 
      test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      
      test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
      });

      // Arrays and iterables (any object containing a sumbol, can be iterated over with)

      const holidayList = [
          'suncream',
          'beach towel',
          'sun glasses',
          'camera',
      ];

      test('the holiday list', () => {
          expect(holidayList).toContain('beach towel');
          expect(holidayList).not.toContain('notebook');
      });

      // exceptions 

      function compileAndroidCode() {
        throw new Error('you are using the wrong JDK');
      }
      
      test('compiling android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow();
        expect(() => compileAndroidCode()).toThrow(Error);
      
        // You can also use the exact error message or a regexp
        expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
        expect(() => compileAndroidCode()).toThrow(/JDK/);
      });

    }); 

