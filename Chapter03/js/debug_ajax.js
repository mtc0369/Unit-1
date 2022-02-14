//Chapter 2 Code
//initialize / call addColumns & addEvents functions when the script loads
function initialize(){
    addColumns();
	addEvents();
};
//function for setting up table and array
function addColumns(cityPop){
    //cityPop array with 4 objects
	var cityPop = [
		{city: 'Madison',
		population: 233209},
		{city: 'Milwaukee',
		population: 594833},
		{city: 'Green Bay',
		population: 104057},
		{city: 'Superior',
		population: 27244}
	];
	//create a table element
	var table = document.createElement("table");

	//create a header row
	var headerRow = document.createElement("tr");

	//add the header row
	table.appendChild(headerRow);

	//loop to add a new row for each city
	cityPop.forEach(function(i){
		//create table rows
		let tr = document.createElement("tr");
		//variable for city data to iterate through array
		let city = document.createElement("td");
		city.innerHTML = i.city;
		tr.appendChild(city);
		//variable for population data to iterate through array
		let pop = document.createElement("td");
		pop.innerHTML = i.population;
		tr.appendChild(pop);
		//append objects from array to the table
		table.appendChild(tr);
	});

	//querySelector linking javaScript table to index.html
	var myDiv = document.querySelector("#myDiv");
	myDiv.appendChild(table);
	
	//querySelector for all rows in table with local function containing two parameters; iterate through array
	document.querySelectorAll("tr").forEach(function(row, i){
		//conditional statement, setting iterator to 0
		if (i == 0){
			//adds header labels for City, Population, and City Size when condition above is true	
			row.insertAdjacentHTML('beforeend', '<th>City</th><th>Population</th><th>City Size</th>');
			//conditional statement to populate all other rows in City Size column
			} else {
				//creation of citySize variable under else condition
				var citySize;
				//conditional statement labeling small cities with a pop less than 100000
				if (cityPop[i-1].population < 100000){
					citySize = 'Small';
				//conditional statement labeling medium cities with a pop less than 100000
				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';
				//conditional statement labeling large cities with a pop less than 100000
				} else {
					citySize = 'Large';					
				};
				//populates city sizes in the table column, table data html elements
				row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
			};
    });
};
//fuction to add museover event with style/color
function addEvents(){
	//adding mouseover function to the table
	document.querySelector("table").addEventListener("mouseover", function(){
		//setting variable for color to equal rgb, on console will appear as rgb(#,#,#)
		var color = "rgb(";
		//for-loop to iterate through random rgb numbers from indices 0-3
		for (var i=0; i<3; i++){
			//rounds and multiplies the random numbers generated above by 255
			random = Math.round(Math.random() * 255);
			//reassigning color varible to include the random math
			color += random;
			//conditional statement inserting a comma between random rgb numbers generated 
			if (i<2){
				color += ",";
			//completes the random color assignment by closing the ()
			} else {
				color += ")"; 
			//logging color variable to console to see randomly generated rgb
			//console.log(color);
		};
		//adds the random color assignments to the table in mouseover function
		document.querySelector("table").style.color = color;
	};
	});
	//nested function for a pop-up when the table is clicked
	function clickme(){
		//alert to be displayed on pop-up when table is clicked
		alert('Hey, you clicked me!');
	};
	//adding the click event to the table to execute clickme function
	document.querySelector("table").addEventListener("click", clickme);
	//setting font size and alignment for table
	document.querySelector('#myDiv').style.fontSize = '1em';
    document.querySelector('#myDiv').style.textAlign = 'left';
};
//initialize, load script with addEventListener().
document.addEventListener('DOMContentLoaded', initialize);

/*//Chapter 3 Code
//Callback function linked to the mydata variable holding the geojson data in the callback function wihtin the debugAjax function.
function debugCallback(response){
	mydata = response //mydata variable linked to the response request.
	//querySelector linking HTML to javaScript allowing the geojson file to be displayed on the server in string format through the mydata variable.
	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))
	
};
//Function to retrieve data from the MegaCities data file.
function debugAjax(){
	//variable to hold data in MegaCities file.
	var mydata;
	//Fetch request to retrieve MegaCities data
	fetch("data/MegaCities.geojson")
		//conversion callback function (anonymous) to return the data in a usable form.
		.then(function(response){
			return response.json();
		})
		//anonymous callback function storing data in the 'mydata' variable, allowing return/use of the data through the debugCallback function.
		.then(function(response){
			mydata = response
			debugCallback(mydata);
			//console.log(mydata)//data check
		})

	//document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))//extraneous/misplaced querySelector
};

//document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))//extraneous/misplaced querySelector

//loading script to server
document.addEventListener('DOMContentLoaded',debugAjax)*/


/*//Chapter 3 Code Alternate 1
//Callback function linked to the mydata variable holding the geojson data in the callback function wihtin the debugAjax function.
function debugCallback(response){
	mydata = response //mydata variable linked to the response request.
	
	//document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))//extraneous/misplaced querySelector
	
};
//Function to retrieve data from the MegaCities data file.
function debugAjax(){
	//variable to hold data in MegaCities file.
	var mydata;
	//Fetch request to retrieve MegaCities data
	fetch("data/MegaCities.geojson")
		//conversion callback function (anonymous) to return the data in a usable form.
		.then(function(response){
			return response.json();
		})
		//anonymous callback function storing data in the 'mydata' variable, allowing return/use of the data through the debugCallback function.
		.then(function(response){
			mydata = response
			debugCallback(mydata);
			//console.log(mydata)//data check
			//querySelector linking HTML to javaScript allowing the geojson file to be displayed on the server in string format through the mydata variable.
			document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))
		})
};

//document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(mydata))//extraneous/misplaced querySelector

//loading script to server
document.addEventListener('DOMContentLoaded',debugAjax)*/


//Chapter 3 Code Alternate 2
//Function to retrieve data from the MegaCities data file, then convert and display on server.
function debugAjax(){
	//Fetch request to retrieve MegaCities data
	fetch("data/MegaCities.geojson")
		//conversion callback function (anonymous) to return the data in a usable form.
		.then(function(response){
			return response.json();
		})
		//anonymous callback function storing data in the 'mydata' variable, allowing return/use of the data through the debugCallback function.
		.then(function(response){
			//querySelector linking HTML to javaScript allowing the geojson file to be displayed on the server in string format through the mydata variable.
			document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br> ' + JSON.stringify(response))
			});
			//console.log(mydata)//data check		
};

//loading script to server
document.addEventListener('DOMContentLoaded',debugAjax)