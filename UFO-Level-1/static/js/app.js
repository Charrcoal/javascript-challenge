// from data.js
var tableData = data;

// YOUR CODE HERE!
// get a reference to the table body in index.html
var tbody = d3.select("tbody")
// Use arrow function to update each cell with element from data.js
tableData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// // Use function 
// tableData.forEach(function(element) {
//     var row = tbody.append("tr");
//     Object.entries(element).forEach(function([key, value]) {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// // Grab the filter criteria 
// select the button and form in index.html
var button = d3.select("#filter-btn");
var form = d3.select(".panel-body");
// create event handlers for clicking the button or pressing the enter key 
button.on("click", runEnter)
form.on("submit", runEnter)

// create the function to run the events
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
    var filteredData = tableData.filter(element => element.datetime === inputValue);

    if (inputValue === "") {
        var filteredData = tableData;
    };
    
    // console.log(filteredData);

    // get a reference to the table body in index.html
    tbody.html("");
    filteredData.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

