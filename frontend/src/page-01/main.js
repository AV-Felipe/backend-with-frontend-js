// IMPORTS
import { createTableHeader, populateData, updateValueList } from "./modules/data-to-html.js";

// ELEMENTS
const buttonAddRegister = document.getElementById('link-to-data-add-page');
const buttonQueryData = document.getElementById('link-to-query-data-page');

const pageDisplay = document.querySelector('main');

const inputQueryType = document.getElementById('query-type');
const inputQueryValue = document.getElementById('main-search-input');
const buttonSendQuery = document.getElementById('send-query-button');
const outputTable = document.getElementById('fetched-data-table');
const formFieldForQueryValue = document.getElementById('main-search-input-area');


// LISTENERS

buttonSendQuery.addEventListener('click', sendQuery);

inputQueryType.addEventListener('change', updateQueryValues);


// FETCH FUNCTIONS

// GET request - route /people - !!! it is actually performing three functions, preparing the display table and fetching data before rendering it
//we could slit in one function that prepares the table and calls the fetch, then the fetch, on finishing, pass the data to a rendering function
function sendQuery(){
    const queryType = inputQueryType.value;
    const queryValue = inputQueryValue.value;
    //console.log(queryType + queryValue);
    outputTable.innerHTML = createTableHeader(queryType);

    fetch(`http://192.168.0.100:3000/people?${queryType}=${queryValue}`)
        .then(response => response.json())
        .then(data => {
            data.map((dataObject)=>{
                document.querySelector('#fetched-data-table tbody').insertAdjacentHTML('beforeend', populateData(dataObject, queryType));
            })
        });
}

// QUERY PAGE FUNCTIONS

function updateQueryValues() {

    while(inputQueryValue.firstChild){
        inputQueryValue.removeChild(inputQueryValue.firstChild);
    }
    if (inputQueryType.value === 'month' || inputQueryType.value === 'department'){
        formFieldForQueryValue.style.display = 'block'
        inputQueryValue.insertAdjacentHTML('beforeend', updateValueList(inputQueryType.value));
    }
    if (inputQueryType.value === 'branch'){
        formFieldForQueryValue.style.display = 'none';
    }
}
