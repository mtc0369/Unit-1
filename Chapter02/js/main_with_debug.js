//initialize function called when the script loads
function initialize(){
    addColumns();
	addEvents();
};

function addColumns(cityPop){
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
		let tr = document.createElement("tr");

		let city = document.createElement("td");
		city.innerHTML = i.city;
		tr.appendChild(city);

		let pop = document.createElement("td");
		pop.innerHTML = i.population;
		tr.appendChild(pop);

		table.appendChild(tr);
	});

	//Example 3.1, querySelector.
	var myDiv = document.querySelector("#myDiv");
	myDiv.appendChild(table);
	

	document.querySelectorAll("tr").forEach(function(row, i){

		if (i == 0){
			row.insertAdjacentHTML('beforeend', '<th>City</th>');
			row.insertAdjacentHTML('beforeend', '<th>Population</th>');	
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

			} else {
				
				var citySize;

				if (cityPop[i-1].population < 100000){
					citySize = 'Small';

				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';

				} else {
					citySize = 'Large';
				};

				row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
			};
    });
};

function addEvents(){
	
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			random = Math.round(Math.random() * 255);
			
			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		
		document.querySelector("table").style.color = color;
	};
	});
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme);
	document.querySelector('#myDiv').style.fontSize = '1.5em';
    document.querySelector('#myDiv').style.textAlign = 'left';
};

//Example 3.4 initialize with addEventListener().
document.addEventListener('DOMContentLoaded', initialize);
