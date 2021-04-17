// API Base URL - the server address
const BASE_URL = 'http://localhost:8080';

// Default HTTP headers for requests to the api
const HTTP_REQ_HEADERS = new Headers({
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "bearer " + sessionStorage.getItem('accessToken')
});

// Used to Initialise GET requests and permit cross origin requests
const GET_INIT = {
method: 'GET',
credentials: 'include',
headers: HTTP_REQ_HEADERS,
mode: 'cors',
cache: 'default'
};


// Asynchronous Function getDataAsync from a url and return
// The init paramter defaults to GET_INIT
let getDataAsync = async (url, init = GET_INIT) => {

    // Try catch  
    try {
    
    // Call fetch and await the respose  
    // Initally returns a promise  
    const response = await fetch(url, init);
    
    // As Resonse is dependant on the fetch call, await must also be used here 
    const json = await response.json();
    
    // Output result to console (for testing purposes) 
    console.log(json);
    
    // Call function( passing he json result) to display data in HTML page 
    //displayData(json); 
    return json;
    
    // catch and log any errors  
    } catch (err) {  
    console.log(err);  
    return err;  
    }   
}

let displayGobrellaTable = (Gobrella) => {
    
    const rows = Gobrella.map(Gobrellas => {
    
    let row = `<tr> 

    <td>${Gobrellas._id}</td> 
    <td>${Gobrellas.Station}</td>
    <td>${Gobrellas.Station_address}</td>
    <td>${Gobrellas.Gobrella_description}</td>
    </tr>`;

    return row;
    });
    
    document.getElementById('GobrellaRows').innerHTML = rows.join('');
    } 



let loadGobrellaTable = async () => {
    try {
    
    // get data - note only one parameter in function call 
    const Gobrella = await getDataAsync(`${BASE_URL}/Gobrella`);
    //pass json data for display  
    displayGobrellaTable(Gobrella);
    
    } // catch and log any errors
    catch (err) { 
    console.log(err); 
        }   
    }
    
    loadGobrellaTable();




