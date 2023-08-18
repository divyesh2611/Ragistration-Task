const express =  require('express');
const app  =  express();
const router =  require('./rest-service');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);
const PORT = 3004;
app.listen(PORT,()=>{
    console.log(`server is listen on port no ${PORT}` );
})