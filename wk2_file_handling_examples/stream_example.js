var fs = require('fs');

const input_stream = "input_stream.txt"
const output_stream = "output_stream.txt"
var readStream = fs.createReadStream(input_stream)

// Data available
readStream.on("data", (rawData) => {
    console.log(`${rawData.toString()}`)
})
// Data read done
readStream.on("end", () =>{
    console.log("-- Data read done from stream ")
})

//Error
readStream.on("error", (err) =>{
    console.log(`Error: Read Stream ${err}`)
})

//Write Stream
var writeStream = fs.createWriteStream(output_stream)

writeStream.on("finish", () =>{
    console.log("-- Data Written")
})

//Error
writeStream.on("error", (err) =>{
    console.log(`-- Error: Write Stream ${err}`)
})

writeStream.write("GBC-1")
writeStream.write("GBC-2")
writeStream.write("Elizaveta Vygovskaia")

writeStream.end()