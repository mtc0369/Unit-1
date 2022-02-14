/*//Example 2.4
function jsAjax(){
    //Step 1: Creating a data request
    var request = new Request('data/MegaCities.geojson');
    //Step 2: Defining fetch parameters
    var init = {
        method: 'GET'
    };
    //Step 3: Using fetch to retrieve data
    fetch(request, init)
        .then(callback) //Step 4: Sending retireved data to a callback function
};

//define callbck function
function callback(response){
    
    console.log(response)
}

window.onload = jsAjax();*/

/*//Example 2.5 & 2.6
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve data
    fetch(request, init)
        .then(conversion) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(JSON.stringify(response));
};

window.onload = jsAjax();*/

/*//Example 2.7
function jsAjax(){
    //use fetch to retrieve data directly without using request and init variables
    fetch('data/MegaCities.geojson')
        .then(conversion)
        .then(callback)
};

//define the conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
};
//define the callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
};

window.onload = jsAjax();*/

//Example 2.8
/*function jsAjax(){
    //use fetch to retrieve data directly without using request and init variables
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();//combines the conversion function with .then using an anonymous function 
        })
        .then(callback)
};*/
/*//define the conversion callback function, replaced by anonymous function above
function conversion(response){
    //convert data to usable form
    return response.json();
};*/
/*//define the callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
};

window.onload = jsAjax();*/

/*//Example 3.1 and 3.2: viewing fetched data without converting and print attempt with .json(). 
function jsAjax(){
    fetch('data/MegaCities.geojson')
        .then(callback) 
};

function callback(response){
    console.log(response.json())//Using .json() does print file to console opposed to generic response log.
}

window.onload = jsAjax();*/

/*//Example 3.3: Correctly accessing the response using a callback() function.
//define fetch request
function jsAjax(){
    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function; Example 3.4: calling nextFunction() within the callback() function.
function callback(response){
    //tasks using the data go here
    //console.log(response);

    var myData = response;

    //pass data to another function
    nextFunction(myData);
};
function nextFunction(data){
    console.log(data); //contains response data held by myData in callback

};

window.onload = jsAjax();*/

//Example 3.5: An anonymous callback function 
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //checking the data
            console.log(myData);
        }) 

    //check the data
    console.log(myData);
};

document.addEventListener('DOMContentLoaded',jsAjax)