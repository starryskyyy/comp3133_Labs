var fs = require("fs")
console.log("Week 02 - File Handling")

console.log("-----START-----")
fs.readFile("input.txt", (err, data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(`Async: ${data.toString()}`)
})
console.log("-----END-----")

console.log("-----START Sync-----")
var data = fs.readFileSync("input.txt")
console.log(`Sync: ${data.toString()}`)
console.log("-----END-----")

