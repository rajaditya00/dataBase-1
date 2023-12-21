

//server instantiate
const express = require('express');
const app = express();


//use to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


// activate the server on 3000 port
app.listen(3000, ()=>{
    console.log("server started at port no. 3000");
})


//Routes
app.get('/', (request, response)=>{
    response.send("kya haal chal hai sbka..");
})

app.post('/api/cars',(request,response) =>{
    const {name, brand}= request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully")
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then( ()=>{ console.log("connection successful");})
.catch( ()=>{console.log("received an error");})