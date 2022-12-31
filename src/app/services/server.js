const express=require('express');

//instance 'app' de bibliothéque express
const app=express();


//the data
const data=[{
    film: "titanic",
    year: 1566
},
{
    film:"hug",
    year: 2000
},];

//the api to get the data
app.get("/data", (req,res)=>{
    res.json(data);
});

//set the server port
app.listen(5000, ()=>{
    console.log("serveur en marche");
});
