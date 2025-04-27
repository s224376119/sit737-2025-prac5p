const express = require("express");
const app = express();
const port = 3000;


app.get('/', (reg,res)=> {

    res.send("Welcome");


}


);


app.listen(port, ()=> {

console.log("server running http://localhost:${port}");



})