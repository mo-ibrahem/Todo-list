const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    var today = new Date();

    if (today.getDay() == 1 || today.getDay() == 2){
        res.send("<h1>Yay Weekend</h1>");
    }else{
        res.sendFile(__dirname + "/index.html");
    }
})

app.listen(3000, function () {
    console.log("listening on 3000");
})