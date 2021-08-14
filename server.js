// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

//use core & body-parser
const cors=require('cors');
const bodyParser=require('body-parser');

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.listen(2412, ()=>{
    console.log("Local Server = 2412");
})

/** Route */

app.get("/GETtemperature",(req,res)=>{            //endpoint   get route
    res.send(projectData);
})

app.post("/weathermap",(req,res)=>{        //endpoint  post route
    projectData=req.body;
    res.end();
})



