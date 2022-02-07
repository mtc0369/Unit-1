// Add all scripts to the JS folder
/*function myFunc() {
    //var myDiv = document.getElementById("myDiv");
    //myDiv.innerHTML = "Hello World";
    var myDiv = document.querySelector("#myDiv");
    myDiv.innerHTML = "Hello World!";
};

window.onload = myFunc();*/

//initialize function called when the script loads
function initialize(){
    cityPop();
};

//function to create a table with cities and their populations
function cityPop(){
    //define two arrays for cities and population
    let cityPop = [
        {city: 'Santa Barbara',
        population: 88665},
        {city: 'San Francisco',
        population: 873965},
        {city: 'San Diego',
        population: 1386932},
        {city: 'Los Angeles',
        population: 3898747}
    ];

//Pushing information into the cityPop array
/*const cityPop = [];

const city1 = {};
city1.city = "Santa Barbara";
city1.population = 88665;

const city2 = {};
city2.city = 'San Francisco';
city2.population = 873965;

const city3 = {};
city3.city = 'San Diego';
city3.population = 1386932;

const city4 = {};
city4.city = 'Los Angeles';
city4.population = 3898747;
cityPop.push(city1, city2, city3,  city4);*/

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    /*//add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);*/

    //Example 3.4, adding "City" and "Population" headers with insertAdjacentHTML().
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

    //add the row to the table
    table.appendChild(headerRow);

    /*//for-loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);
     
        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);
    };*/

//While-loop to add a new row for each city, example 2.6.
/*let i = 0;

while (i < cityPop.length) {
    let tr = document.createElement("tr");

    let city = document.createElement("td");
    city.innerHTML = cityPop[i].city;
    tr.appendChild(city);

    let pop = document.createElement("td");
    pop.innerHTML = cityPop[i].population;
    tr.appendChild(pop);

    table.appendChild(tr);

    i++;
};*/

//forEach loop, example 2.6 with anonymous function.
/*cityPop.forEach(function(i){
    let tr = document.createElement("tr");

    let city = document.createElement("td");
    city.innerHTML = i.city;
    tr.appendChild(city);

    let pop = document.createElement("td");
    pop.innerHTML = i.population;
    tr.appendChild(pop);

    table.appendChild(tr);
});*/

//forEach loop with a for-loop, example 2.6.
/*cityPop.forEach(function(i) {
    let tr = document.createElement("tr");

    for (let property in i) {
        let td = document.createElement("td");
        td.innerHTML = i[property];
        tr.appendChild(td);
    };

    table.appendChild(tr);
});*/

//for-loop with conditional statement, example 2.7.
/*for (let i = 0; i < cityPop.length; i++) {
    let tr = document.createElement("tr");

    let city = document.createElement("td");
    if (cityPop[i].city == 'Santa Barbara') {
        city.innerHTML = 'UCSB';
    } else if (cityPop[i].city == 'San Francisco') {
        city.innerHTML = 'UC Berkley';
    } else {
        city.innerHTML = cityPop[i].city;
    };
    tr.appendChild(city);

    let pop = document.createElement("td");
    /*if (cityPop[i].population < 500000); {
        pop.innerHTML = cityPop[i].population;
    } else {
        //pop.innerHTML = 'Too Big!';
    };
    pop.innerHTML = cityPop[i].population < 500000 ? cityPop[i].population : 'Too Big!';
    tr.appendChild(pop);

    table.appendChild(tr);
};*/

//Example 3.4, for-loop with insertAdjacent() to iterate through array.
for (let i = 0; i < cityPop.length; i++) {
    //assigning longer HTML strings to a variable
    let rowHTML = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
    //add the row's HTML string to the table.
    table.insertAdjacentHTML('beforeend', rowHTML);
};

    //add the table to the div in index.html
    /*var myDiv = document.getElementById("myDiv");
    myDiv.appendChild(table);*/

    //Example 3.1, querySelector.
    var myDiv = document.querySelector("#myDiv");
    myDiv.appendChild(table);

    //Example 3.5, getting and setting Attributes.
    /*var theid = document.querySelector('#myDiv').getAttribute('id');

    //Example 3.5, theid is'myDiv', adding as text to the div.
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend', theid);

    //Example 3.5, adding the Class 'foo' to the div.
    document.querySelector('#myDiv').setAttribute('class', 'foo');*/

    //Example 3.6,getting the div id.
    /*var theid = document.querySelector('#myDiv').id;

    //Example 3.6, setting the id to newdiv - preferred method compared to setAttribute().
    document.querySelector('#myDiv').id = "newDiv";

    //Example 3.6, setting the class.
    document.querySelector('#newDiv').className = "foo";*/

    //Example 3.7, iterating over script elements and adding their source url's as text to the div.
    /*document.querySelector("script").forEach(function(selectedScript) {
        var thesource = selectedScript.src;
        document.querySelector('#myDiv').insertAdjacentHTML('beforeend', thesource);
    });*/

    //Example 3.8, click listener with anonymous handler function.
    /*document.querySelector('table').addEventListener('click', function() {
        alert('Madison Rocks! Go Badgers!');
    });

    //Example 3.8, named handler function for removable listener - added then removed.
    function clickme() {
        alert('Yeah Green Bay! Go Packers!');
    };
    document.querySelector('table').addEventListener('click', clickme);

    document.querySelector('table').removeEventListener('click', clickme);*/

    //Example 3.9 and 3.10, changing the style of an element - will override any styles in CSS folder.
    document.querySelector('#myDiv').style.color = 'blue';

    document.querySelector('#myDiv').style.fontSize = '1.5em';
    document.querySelector('#myDiv').style.textAlign = 'left';

    document.querySelector('#myDiv').style.backgroundColor = 'yellow'

    //getting text color and adding it as text to the div.
    var thecolor = document.querySelector('#myDiv').style.color;
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend', thecolor);

    var backcolor = document.querySelector('#myDiv').style.backgroundColor;
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend', backcolor)

    console.log(backcolor);
};

//call the initialize function when the window has loaded
//window.onload = initialize();

//Example 3.4 initialize with addEventListener().
document.addEventListener('DOMContentLoaded',initialize);