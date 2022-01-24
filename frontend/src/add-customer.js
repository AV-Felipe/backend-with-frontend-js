const nameField = document.getElementById('input-name');
const birthdayField = document.getElementById('input-birthday');
const branchlineField = document.getElementById('input-branchline');
const emailField = document.getElementById('input-email');
const departmentField = document.getElementById('input-department');
const postButton = document.getElementById('input-submit');

postButton.addEventListener('click', postData);

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
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function adjustDateFormat(YYYYMMDD){
    const currentDateFormat = YYYYMMDD;
    const x = currentDateFormat;
    const serverDateFormat = `${x[8] + x[9]}/${x[5] + x[6]}/${x[0]+ x[1] + x[2] + x[3]}`;
    return(serverDateFormat);
}