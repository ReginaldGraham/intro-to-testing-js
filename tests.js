// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// sayHello

describe(`sayHello`, function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe(`function`);
    });

    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it(`should return the string "Hello, Jane!" when executed`, function () {
        expect(sayHello(`Jane`)).toBe("Hello, Jane!")
    });
    it(`should return the string "Hello, Alex!" when executed`, function () {
        expect(sayHello(`Alex`)).toBe("Hello, Alex!")
    });
    it(`should return the string "Hello, Pat!" when executed`, function () {
        expect(sayHello(`Pat`)).toBe("Hello, Pat!")
    });
    it(`should return the string "Hello, World!" when executed`, function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
});



// isFive
describe(`isFive`, function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe(`function`);
    });

    it(`should return the boolean true when executed`, function () {
        expect(isFive(5)).toBe(true)
    });
    it(`should return the boolean false when input is string`, function () {
        expect(isFive(typeof `string`)).toBe(false)
    });
    it(`should return the boolean false when x doesn't equal 5`, function () {
        expect(isFive( !5)).toBe(false)
    });
});
//isEven
describe(`isEven`, function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it(`should return the boolean false if false`, function () {
        expect(isEven(false )).toBe(false)
    });
    it(`should return the boolean false when input isn't even`, function () {
        expect(isEven( `input`%2!==0)).toBe(false)
    });
    it(`should return the boolean false if infinity`, function () {
        expect(isEven(Infinity)).toBe(false)
    });

});
//isVowel
describe(`isVowel`, function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe(`function`);
    });
    it(`should return the boolean true if a,e,i,o,u are input`, function () {
        expect(isVowel(`a` || `e` || `i` || `o` || `u`)).toBe(true)
    });
    it(`should return the boolean false when input isn't a,e,i,o,u `, function () {
        expect(isEven(7)).toBe(false)
    });
});
//add
describe(`add`, function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe(`function`);
    });
    it(`should return the sum of input+input2`, function () {
        expect(add(2, 7)).toBe(9)
    });
    it(`should return the sum of positive and negative numbers`, function () {
        expect(add( -14,7)).toBe(-7)
    });
    it(`should return the sum of positive and negative numbers`, function () {
        expect(add()).not.toBe(NaN)
    });
    it(`should return the sum of positive and negative numbers`, function () {
        expect(add(`hello`,`kevin`)).not.toBe(NaN)
    });
});

// The add function should sum two numbers, as long as each input is a number or a string containing a number.
//     Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat (move onto the next test.)
// Assert that add:
//     add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN
// Start with the smallest tests first.
//     Write just enough code to green the test
// Build up functionality one small piece at a time.
//     If any input is not a number, return NaN
// Refactor, if possible
//     Repeat until the tests are robust and the function works as intented.
//     Commit your work to git and push to GitHub.



