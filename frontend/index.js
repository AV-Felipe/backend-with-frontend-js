import express from 'express';

const app = express();

const port = 8080;

app.use(express.static('./src'));

app.listen(port, ()=>{
    console.log(`Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
})