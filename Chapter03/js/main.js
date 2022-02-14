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
function jsAjax(){
    //use fetch to retrieve data directly without using request and init variables
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();//combines the conversion function with .then using an anaonymous function 
        })
        .then(callback)
};
/*//define the conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
};*/
//define the callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
};

window.onload = jsAjax();