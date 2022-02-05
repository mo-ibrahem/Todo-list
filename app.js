const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');
var today = new Date();

app.get('/', (req, res) => {


    var options={
        weekday: 'long',day: 'numeric', month: 'long'
    }

    var day = today.toLocaleDateString("en-US", options);
    

    res.render('list', {KindOfday: day});  





})

app.listen(3000, function () {
    console.log("listening on 3000");
})