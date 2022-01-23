// IMPORTS
import { createTableHeader, populateData } from "./modules/data-to-html.js";

// ELEMENTS

const inputQueryType = document.getElementById('query-type');
const inputQueryValue = document.getElementById('main-search-input');
const buttonSendQuery = document.getElementById('send-query-button');
const outputTable = document.getElementById('fetched-data-table');
const outputTableBody = document.querySelector('#fetched-data-table tbody');

// LISTENERS

buttonSendQuery.addEventListener('click', sendQuery);

// FUNCTIONS

// GET request - route /people - !!! it is actually performing three functions, preparing the display table and fetching data before rendering it
//we could slit in one function that prepares the table and calls the fetch, then the fetch, on finishing, pass the data to a rendering function
function sendQuery(){
    const queryType = inputQueryType.value;
    const queryValue = inputQueryValue.value;
    //console.log(queryType + queryValue);
    outputTable.innerHTML = createTableHeader(queryType);

    fetch(`http://127.0.0.1:3000/people?${queryType}=${queryValue}`)
        .then(response => response.json())
        .then(data => {
            data.map((dataObject)=>{
                document.querySelector('#fetched-data-table tbody').insertAdjacentHTML('beforeend', populateData(dataObject, queryType));
            })
        });
}

