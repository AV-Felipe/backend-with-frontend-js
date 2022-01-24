// ELEMENTS
const nameField = document.getElementById('input-name');
const birthdayField = document.getElementById('input-birthday');
const branchlineField = document.getElementById('input-branchline');
const emailField = document.getElementById('input-email');
const departmentField = document.getElementById('input-department');
const postButton = document.getElementById('input-submit');
const formInputData = document.getElementById('input-data-form');

// EVENT LISTENER
postButton.addEventListener('click', checkToPost);


// SERVER COMMUNICATION - POST request
function postData(){

    const newEntryObject = {"name":nameField.value,"email":emailField.value,"branchLine":branchlineField.value,
    "department":departmentField.value,"birthDate":adjustDateFormat(birthdayField.value)}

    console.log(newEntryObject)

    fetch(`http://192.168.0.100:3000/peoples`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntryObject),
    })
    .then(response => {
        
        if(response.status === 201){
            console.log(response.status)
            clearForm();
        }else{
            console.log('something went wrong')
        }
    })
    .catch(error => console.log(error));
}

// FUNCTIONS - general purpose

function adjustDateFormat(YYYYMMDD){
    const currentDateFormat = YYYYMMDD;
    const x = currentDateFormat;
    const serverDateFormat = `${x[8] + x[9]}/${x[5] + x[6]}/${x[0]+ x[1] + x[2] + x[3]}`;
    return(serverDateFormat);
}

function clearForm(){
    formInputData.reset();
    document.querySelector('main').insertAdjacentHTML('beforeend', '<p id="temp-message" style="color: green;">cadastro realizado com sucesso</p>');
    setTimeout(()=>{document.getElementById('temp-message').remove()},2500);
}

function checkToPost (){
    const inputFields = [nameField, birthdayField, branchlineField, emailField, departmentField];
    let emptyFlag = false;
    
    inputFields.map((field)=>{
        if(field.value === ""){emptyFlag = true}
    })

    if(emptyFlag){
        document.querySelector('main').insertAdjacentHTML('beforeend', '<p id="temp-message" style="color: red;">todos os campos devem ser preenchidos</p>');
        setTimeout(()=>{document.getElementById('temp-message').remove()},2500);
        return('error')
    }else{
        postData();
    }
}