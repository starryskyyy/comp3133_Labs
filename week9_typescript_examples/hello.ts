import { Employee } from "./Employee"

var fullname: string = "Elizaveta"

console.log('Hello world')

var college: string = "GBC"
//college = 100
console.log(college)

var a: number = 100
var flag: boolean = true

var n: String // interface

var student1 = {
    sid: 1,
    firstname: "Elizaveta",
    lastname: "Vygovskaia"
}

var student2 = {
    sid: 1,
    firstname: "Roman",
    lastname: "Ekhsani"
}
console.log(student1)

interface Student {
    sid: number,
    firstname: string,
    lastname: string,
    result: string
}


var student3: Student = {
    sid: 1234,
    firstname: "Danesh",
    lastname: "Pepega",
    result: "PASS"
}

var x: number | String
x = "hello"

// x = false not allowed

var y: any

y = 100
y = "hello"
y = false

const c = 1000

function sum(a: number, b: number):number {
    return a + b
}

console.log(sum(10, 200))


var emp1 = new Employee(1, "Elizaveta", "Vygovskaia", "PASS")
emp1.print()
emp1.lastname = "TEST"
emp1.print()


enum DayName {
    MONDAY,
    TUESDAY,
    HOLIDAY,
    FUNDAY
}

var today = DayName.FUNDAY

console.log(today)

console.log(typeof student1)
console.log(typeof a)
console.log(typeof flag)

var marks = [10, 20, 30, 40]
var countries:string[] = [];

countries.push("Canada")
countries.push("USA")
countries.push("Russia")
countries.push("India")

//Tuples

var person:[number, string]
person = [1, "Elizaveta"]
console.log(person)
