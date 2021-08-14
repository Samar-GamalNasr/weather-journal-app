                    /*  client side  */
/* Global Variables */

// Create a new date instance dynamically with JS

// to tell user how this web work well 
alert("you must write zip code (write it correct to get right temperature )");

let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();


// for UI
let dateUI=document.querySelector('#date');
let tempUI=document.getElementById('temp');
let contentUI=document.querySelector('#content');

/*  API */

//  the key  of API
const APIKey="e677d4b39122991d2bf1ea790111a472";

// the button generate which click to start all thing in site
let btn =document.querySelector('#generate');




// the main method 
btn.addEventListener("click",async()=>{
// the text area whic writen in it zipcode      
const zip=document.querySelector('#zip').value;
//text area feeling
const feel=document.querySelector('#feelings').value;

//test event
//console.log("you click button ")

openweathermap(zip)
.then((finalre)=>{
return routingPG(finalre,feel)
})
.then(finalre=>{
    ui(finalre)
})
.catch(err =>{
    console.log("the error is "+err)
})

})
 async function openweathermap(zip){
// the line of API
const theRes  =await   fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${APIKey}&units=metric`);
// return tne data of temp 
const info=await theRes.json();
return info.main.temp;
    }
async function routingPG(temp,feel){
    //  send data to post
await fetch('/weathermap' ,
{
method:'POST',
credentials:'same-origin',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({
    date:newDate,
    temp:temp,
    content:feel

})

});
// recive data
const SR=await fetch('/GETtemperature',{
    credentials:'same-origin'
});

 // this return object of data
const data=await SR.json();

return data

}

function ui(data){
    
// to update UI 
dateUI.innerHTML="Date:     "+data.date;
tempUI.textContent="temperature:    "+data.temp + " Celcius";
contentUI.innerHTML="your feeling is    "+data.content;
}

