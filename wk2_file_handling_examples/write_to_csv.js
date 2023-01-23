var fs = require('fs')



const header = "eid, name, salary"
const csv_file_name = "emp.csv"



fs.writeFileSync(csv_file_name, header)

// Convert to function if needed
var data = "\n1, Elizaveta Vygovskaia, 500"
fs.writeFileSync(csv_file_name, data, {flag: 'a'})

var data = "\n2, Renzzi Adorador, 600"
fs.writeFileSync(csv_file_name, data, {flag: 'a'})

var data = fs.readFileSync(csv_file_name)
console.log(`${data.toString()}`)

//Delete the file
//fs.unlinkSync(csv_file_name)