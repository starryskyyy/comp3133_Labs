var fs = require('fs');
var csv = require('csv-parser');

const canadaTxt = "canada.txt"
const usaTxt = "usa.txt"
const header = "country,year,population\n"

try {
  // check if file exists
  const stats1 = fs.statSync(canadaTxt);
  const stats2 = fs.statSync(usaTxt);
  if (stats1.isFile()) {
    // delete file
    fs.unlinkSync(canadaTxt);
  }
  if (stats2.isFile()) {
    fs.unlinkSync(usaTxt);
  }
} catch (e) {
  fs.writeFileSync(canadaTxt, header);
  fs.writeFileSync(usaTxt, header);
}

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