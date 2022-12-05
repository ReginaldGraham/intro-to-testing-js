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
    it(`should return the boolean false when input is string`, function () {
        expect(isFive(`5`)).toBe(false)
    });
});
//isEven
describe(`isEven`, function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe(`function`);
    });
    it(`should return the boolean true if input is 2`, function () {
        expect(isEven(2 )).toBe(true)
    });
    it(`should return the boolean true if input is -4`, function () {
        expect(isEven(-4 )).toBe(true)
    });
    it(`should return the boolean true if input is -4`, function () {
        expect(isEven(8 )).toBe(true)
    });
    it(`should return the boolean false if input is 3`, function () {
        expect(isEven(3 )).toBe(false)
    });
    it(`should return the boolean false if input is 3`, function () {
        expect(isEven(`` )).toBe(false)
    });
    it(`should return the boolean false if input is 3`, function () {
        expect(isEven(`banana` )).toBe(false)
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
        expect(isVowel(`a`)).toBe(true)
    });
    it(`should return the boolean true if a,e,i,o,u are input`, function () {
        expect(isVowel(`A`)).toBe(true)
    });
    it(`should return the boolean false when input isn't a vowel`, function () {
        expect(isEven(`y`)).toBe(false)
        });
    it(`should return the boolean false when input is number`, function () {
        expect(isEven(4)).toBe(false)
        });
        it(`should return the boolean false when input isn't a vowel`, function () {
            expect(isEven(`banana`)).toBe(false)
        });
        it(`should return the boolean false when input is empty""`, function () {
            expect(isEven()).toBe(false)
        });
});
//add
describe(`add`, function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe(`function`);
    });
    it(`should return the sum of input+input2`, function () {
        expect(add(2, 3)).toBe(5)
    });
    it(`should return the sum of negative and negative numbers`, function () {
        expect(add( -3,-9)).toBe(-12)
    });
    it(`should return the sum of positive and positive numbers`, function () {
        expect(add( 5,6)).toBe(11)
    });
    it(`should return the sum of positive and negative numbers`, function () {
        expect(add( -4,10)).toBe(6)
    });
    it(`should return the NaN for empty strings`, function () {
        expect(add()).not.toBe(NaN)
    });
    it(`should return NaN for worded strings`, function () {
        expect(add(`banana`,`split`)).not.toBe(NaN)
    });
    it(`should return NaN for worded strings`, function () {
        expect(add(2,`apples`)).not.toBe(NaN)
    });
});







