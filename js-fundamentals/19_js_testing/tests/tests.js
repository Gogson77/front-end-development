describe("compare() function", function () {

    //Spec for comparing two numbers, when second number is greater
    it("should be able to compare two numbers, when second number is greater", function () {
        expect(compare(5, 8)).toEqual(-1);
    });

    //Spec for comparing two numbers, when first number is greater
    it("should be able to compare two numbers, when first number is greater", function () {
        expect(compare(8, 5)).toEqual(1);
    });

    //Spec for comparing two numbers in string form
    it("should be able to compare two numbers in string form", function () {
        expect(compare('8', '5')).toEqual(1);
    });

    //Spec for comparing two numbers, when one is negative
    it("should be able to compare two numbers, when one is negative", function () {
        expect(compare(-8, 5)).toEqual(-1);
    });

    //Spec for comparing two equal numbers
    it("should be able to compare two equal numbers", function () {
        expect(compare(5, 5)).toEqual(0);
    });

    //Spec for should announce that one of the parameters can not be converted to number 
    it("should announce that one of the parameters can not be converted to number", function () {
        expect(function(){
            compare("uztuztuzt", 5)
        }).toThrowError(TypeError);
    });

});