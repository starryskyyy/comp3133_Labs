var fs = require('fs');
var csv = require('csv-parser');

const canadaTxt = "canada.txt"
const usaTxt = "usa.txt"
const header = "country,year,population\n"

// Delete if files exist
fs.statSync(canadaTxt, (err, stat) => {
  if (err) {
    return
  }
  fs.unlinkSync(canadaTxt)
});

fs.statSync(usaTxt, (err, stat) => {
  if (err) {
    return
  }
  fs.unlinkSync(usaTxt)
});

// Adding header to the file
fs.writeFileSync(canadaTxt, header);
fs.writeFileSync(usaTxt, header);

// Readind data from CSV and writing into TXT file
fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Filtering data
    if (row.country === "Canada") {
      data = `${row.country},${row.year},${row.population}\n`
      fs.appendFile(canadaTxt, data, (err) => {
        // In case of a error throw err.
        if (err) throw err;
      })
    }
    // Filtering data
    if (row.country === "United States") {
      data = `${row.country},${row.year},${row.population}\n`
      fs.appendFile(usaTxt, data, (err) => {
        // In case of a error throw err.
        if (err) throw err;
      })
    }
  })
  .on('end', () => {
    console.log('TXT files successfully processed');
  });