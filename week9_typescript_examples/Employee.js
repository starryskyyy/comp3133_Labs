"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(eid, firstname, lastname, result) {
        this.eid = eid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.result = result;
    }
    Employee.prototype.print = function () {
        console.log("Employee ID: ".concat(this.eid));
        console.log("Employee First Name: ".concat(this.firstname));
        console.log("Employee Last Name: ".concat(this.lastname));
        console.log("Employee Result: ".concat(this.result));
    };
    return Employee;
}());
exports.Employee = Employee;
