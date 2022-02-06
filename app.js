const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var today = new Date();
var items = ["Finish 2 full stack courses", "Workout","Read for your Diseration"];
var workItems = [];
app.get('/about', function(req, res) {
    res.render('about');
})
app.get('/', (req, res) => {


    var options={
        weekday: 'long',day: 'numeric', month: 'long'
    }

    var day = today.toLocaleDateString("en-US", options);
    

    res.render('list', {listTitle: day, newlistItems: items});  


})
app.get('/work', (req, res) => {
    res.render('list', {listTitle: "Work List", newlistItems: workItems});
})

app.post('/', (req, res) => {
    console.log(req.body);
    var item =  req.body.newItem;
    if (req.body.list === "Work List"){
        workItems.push(item);
        res.redirect('/work');
    }
    else{
    items.push(item);
    res.redirect("/");
    }
})
app.post('/work', (req, res) => {
    var item =  req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})



app.listen(3000, function () {
    console.log("listening on 3000");
})