"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var fullname = "Elizaveta";
console.log('Hello world');
var college = "GBC";
//college = 100
console.log(college);
var a = 100;
var flag = true;
var n; // interface
var student1 = {
    sid: 1,
    firstname: "Elizaveta",
    lastname: "Vygovskaia"
};
var student2 = {
    sid: 1,
    firstname: "Roman",
    lastname: "Ekhsani"
};
console.log(student1);
var student3 = {
    sid: 1234,
    firstname: "Danesh",
    lastname: "Pepega",
    result: "PASS"
};
var x;
x = "hello";
// x = false not allowed
var y;
y = 100;
y = "hello";
y = false;
var c = 1000;
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 200));
var emp1 = new Employee_1.Employee(1, "Elizaveta", "Vygovskaia", "PASS");
emp1.print();
emp1.lastname = "TEST";
emp1.print();
var DayName;
(function (DayName) {
    DayName[DayName["MONDAY"] = 0] = "MONDAY";
    DayName[DayName["TUESDAY"] = 1] = "TUESDAY";
    DayName[DayName["HOLIDAY"] = 2] = "HOLIDAY";
    DayName[DayName["FUNDAY"] = 3] = "FUNDAY";
})(DayName || (DayName = {}));
var today = DayName.FUNDAY;
console.log(today);
console.log(typeof student1);
console.log(typeof a);
console.log(typeof flag);
var marks = [10, 20, 30, 40];
var countries = [];
countries.push("Canada");
countries.push("USA");
countries.push("Russia");
countries.push("India");
//Tuples
var person;
person = [1, "Elizaveta"];
console.log(person);
