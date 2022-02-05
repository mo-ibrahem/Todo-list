const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
var today = new Date();
var items = ["Finish 2 full stack courses", "Workout","Read for your Diseration"];
app.get('/', (req, res) => {


    var options={
        weekday: 'long',day: 'numeric', month: 'long'
    }

    var day = today.toLocaleDateString("en-US", options);
    

    res.render('list', {KindOfday: day, newlistItems: items});  


})

app.post('/', (req, res) => {
    var item =  req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("listening on 3000");
})