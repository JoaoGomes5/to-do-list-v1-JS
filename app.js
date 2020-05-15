//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
var items =  ["estudar JS" , "estudar matematica" , "ir trabalhar"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {valueDay: day , newListItem: items});
    
});

app.post("/" , function ( req, res ) { 
    
    item =  req.body.newItem;

    items.push(item);
   
    
    res.redirect("/");
    
    
    
})


app.listen(port, function () {
    console.log("Server on port:" + port);
});