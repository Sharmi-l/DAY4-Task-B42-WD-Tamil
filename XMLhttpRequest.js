

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true)

request.send();

request.onload = function () {
   
    var data = JSON.parse(request.response)
    console.log(data);
    for ( i=0; i<data.length;i++){

        // console.log(`Flags: ${data[i].flags}`)              // Flags 
        console.log(data[i].flags)                             // Flags    
        console.log(`Names: ${data[i].name.common}`)           // Names
        console.log(`Region: ${data[i].region}`)               // Region
        console.log(`Sub-Region: ${data[i].subregion}`)        // Sub-Region
        console.log(`Population: ${data[i].population}`)       // Population
   

        // console.log(data[i].flags)                 // Flags   
        // console.log(data[i].name.common)           // Names
        // console.log(data[i].region)               // Region
        // console.log(data[i].subregion)        // Sub-Region
        // console.log(data[i].population)       // Population
   
    }
} 
 

