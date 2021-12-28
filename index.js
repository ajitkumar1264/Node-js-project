const express = require('express');
const path = require('path');
const app=express();
const port =8567;
const hostname ='127.0.0.1';

const staticpath=path.join(__dirname,"views")
app.use(express.static(staticpath));

app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname,"views","main1.html"));
})
app.get("/view",(req,res)=>
{
    res.sendFile(path.join(__dirname,"views","home.html")); 
})
app.get("/about",(req,res)=>
{
    res.sendFile(path.join(__dirname,"views","about.html"));
})
app.get("/contact",(req,res)=>
{
    res.sendFile(path.join(__dirname,"views","contact.html"));
})
app.get("/project",(req,res)=>
{
    res.sendFile(path.join(__dirname,"views","project.html"));
})


app.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
