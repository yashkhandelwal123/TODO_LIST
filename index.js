const express = require('express');
const app = express();

const port = 8000;

//to use express routes
app.use('/' , require('./routes'));

app.listen(port, function(err){
    if(err){
        //interpolation method to print
        console.log(`error occured on port: ${port}`);
        
    }
    console.log(`server is running fine on port: ${port}`);
}); 