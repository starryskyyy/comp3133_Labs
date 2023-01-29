var calculator = require('../app/calculator');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe("Calculator addition", function () {

    var add = calculator.add

    it("Correct addition ", function () {
        assert.equal(add(5, 2), 7);
    });

    it("Incorrect addition", function () {
        assert.equal(add(5, 2), 8);
    });

});

describe("Calculator multiplication", function () {

    var mul = calculator.mul

    it("Correct multiplication ", function () {
        assert.equal(mul(5, 2), 10);
    });

    it("Incorrect multiplication", function () {
        assert.equal(mul(5, 2), 12);
    });

});

describe("Calculator substraction", function () {

    var sub = calculator.sub

    it("Correct substraction ", function () {
        expect(sub(5,2)).to.equal(3)
    });

    it("Incorrect substraction", function () {
        expect(sub(5,2)).to.equal(5)
    });

});

describe("Calculator division", function () {

    var div = calculator.div

    it("Correct division ", function () {
        expect(div(10,2)).to.equal(5)
    });

    it("Incorrect division", function () {
        expect(div(10,2)).to.equal(2)
    });

});


