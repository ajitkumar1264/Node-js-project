const express = require('express');
const path = require('path');
const port=4587;
const hostname='127.0.0.1';

const app=express();

app.get("/",(req,res)=>
{
    res.send("hii how are you you i think you are fine at right now");

})
app.listen(port,hostname,()=>
{
     console.log(`server running at http://${hostname}:${port}`);
});
