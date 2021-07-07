const express = require ('express');
const path = require('path');
const http = require('http');
const app = express();
const port = 9900;
app.use(express.static(path.join(__dirname,'build')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on port ${port}`);
})