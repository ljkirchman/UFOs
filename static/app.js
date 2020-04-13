// Import the data from data.js
const tableData = data;
// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody>
var tbody = d3.select("tbody");
var btn = d3.select('button');
var filters = d3.selectAll('input');

buildTable(tableData);
filters.on('change', handleFilter);
btn.on("click", handleClick);


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Find the tbody tag and Add a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
};

var filteredData = tableData;

function handleFilter() {
  var key = d3.select(this).property('id');
  var value = d3.select(this).property('value');
  filteredData = filteredData.filter( obj => obj[key] == value );
  buildTable(filteredData);
};

function handleClick() {
  filteredData = tableData;
  filters.property('value','');
  buildTable(filteredData);
}
