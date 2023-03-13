"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.getAge = function () {
        console.log(this.age);
        return this.age;
    };
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 25);
customer.greeter();
customer.getAge();
