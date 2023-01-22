console.log("Week01 - Buffer code example")

/* Buffer.alloc()
   Buffer.allocUnsafe()
   Buffer.from()
*/
var a = new Buffer.from("A Hello")
console.log(a)
console.log(a.toString())

// ASCII values
console.log(a[0])
console.log(a[1])

console.log(a.length)

// update string by passing ASCII number
a[0] = 97
a[6] = 97
console.log(a.toString())

var data = "🥰😼"
var buf = Buffer.from(data)
console.log(buf)
console.log(buf.toString())
console.log(buf.length)
console.log(buf[0])
//buf[0] = 65
console.log(buf[1])
console.log(buf.toString())
console.log(buf.toString("utf8"))
console.log(buf.toString("utf-16le"))

var values = "®℗"
var buf2 = Buffer.from(values)
console.log(buf2.length)
console.log(buf2.toString())

// Using alloc

var buf3 = Buffer.alloc(10)
// var buf3 = Buffer.alloc(10, 65) after comma its the value we initialize
// var buf3 = Buffer.alloc(10, "Hello world") prints only "hello world"
// because our size is 10, but string have size 11
console.log(buf3.toString())

var buf4 = Buffer.alloc(15)
buf4.fill('*')
buf4.write("hello world", 4, 2)
console.log(buf4.toString())

//console.log(Buffer)

// Concat 
var newBuffer = a + buf
console.log(newBuffer.toString()) // type - String

newBuffer = Buffer.concat([a, buf, buf2]) // type - Object
console.log(newBuffer.toString())

// Slice
var newBuffer2 = Buffer.from("George Brown College")
console.log(newBuffer2.toString())

var mySlice = newBuffer2.slice(0, 6)
console.log(mySlice.toString())
mySlice = newBuffer2.slice(7, 12)
console.log(mySlice.toString())


