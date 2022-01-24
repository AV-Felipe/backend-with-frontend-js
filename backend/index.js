const express = require('express');

const app = express();

const fs = require('fs');

const port = 3000;

// MIDDLEWARE
app.use(express.json());

// MOCK DB
const DB_TEXT_FILE = fs.readFileSync('./mock-data.json');
const DB_OBJECT = JSON.parse(DB_TEXT_FILE);

// LOCAL MODULES IMPORTS
const getBirthday = require('./modules/happy-birthday.js');

const getPeopleByDepartment = require('./modules/work-department.js');

const getPeopleBranchLine = require('./modules/branch-line.js');

const includeNewRegister = require('./modules/include-data.js');


// GET
app.get('/people', (req, res) => {

    //define the allowed origins and list possible methods for cross origins scenarios - in production, we would use the actual domain names
    //a more controlled way to do this would be to use the express cors middleware: https://expressjs.com/en/resources/middleware/cors.html
    //res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    
    if('month' in req.query){
        let month = req.query.month;

        res.type('json');
        res.send(getBirthday(DB_OBJECT, month));
    }else if('department' in req.query){
        let department = req.query.department;

        res.type('json');
        res.send(getPeopleByDepartment(DB_OBJECT, department));
    }else if('branch' in req.query){
        res.type('json');
        res.send(getPeopleBranchLine(DB_OBJECT));
    }else{
        res.type('text/plain');
        res.status('404');
        res.send('404 - Not Found');
    }
    
})

// POST
app.post('/peoples', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    console.log(req.body)
    /*
    const newEntryObject = req.body;
    const currentLastElement = DB_OBJECT.at(-1);

    const newEntryObject = includeNewRegister(newEntryObject, currentLastElement);

    DB_OBJECT.push(newEntryObject);

    const newFileContent = JSON.stringify(DB_OBJECT);

    fs.writeFile('./mock-data.json', newFileContent, err=>{
        if(err){
            console.log('Error writing file, ', err);
        }else{
            console.log('successfully wrote file');
        }
    })
    */
})

// custom 404 page
app.use((req, res) => {
	res.type('text/plain')
	res.status(404)
	res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
	console.error(err.message)
	res.type('text/plain')
	res.status(500)
	res.send('500 - Server Error')
})

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))