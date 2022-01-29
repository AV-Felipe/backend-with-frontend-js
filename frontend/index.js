import express from 'express';

const app = express();

const port = 8080;

app.use('/funcionarios', express.static('./src/page-01'));
app.use('/calculadora', express.static('./src/page-02'));

app.listen(port, ()=>{
    console.log(`Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
})