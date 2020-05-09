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
    var inputDatetime = d3.select("#datetime");
    var inputCityname = d3.select("#cityname");
    var inputStatename = d3.select("#statename");
    var inputCountryname = d3.select("#countryname");
    var inputUFOshape = d3.select("#ufoshape");

    // #city #state #country #shape 
    var inputDatetimeValue = inputDatetime.property("value");
    var inputCitynameValue = inputCityname.property("value");
    var inputStatenameValue = inputStatename.property("value");
    var inputCountrynameValue = inputCountryname.property("value");
    var inputUFOshapeValue = inputUFOshape.property("value");


// filter the data based on user's input
    var filteredData = tableData;
    
    if (inputDatetimeValue === "") {
        filteredData = filteredData;
    }
    else if (inputDatetimeValue !== "") {
        filteredData = tableData.filter(element => element.datetime === inputDatetimeValue); 
    };


    if (inputCitynameValue === "") {
        filteredData = filteredData;
    }
    else if (inputCitynameValue !== "") {
        filteredData = filteredData.filter(element => element.city === inputCitynameValue); 
    };

    if (inputStatenameValue === "") {
        filteredData = filteredData;
    }
    else if (inputStatenameValue !== "") {
        filteredData = filteredData.filter(element => element.state === inputStatenameValue); 
    };

    if (inputCountrynameValue === "") {
        filteredData = filteredData;
    }
    else if (inputCountrynameValue !== "") {
        filteredData = filteredData.filter(element => element.country === inputCountrynameValue); 
    };

    if (inputUFOshapeValue === "") {
        filteredData = filteredData;
    }
    else if (inputUFOshapeValue !== "") {
        filteredData = filteredData.filter(element => element.shape === inputUFOshapeValue); 
    };


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

