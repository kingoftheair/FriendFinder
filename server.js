//Express Set-Up
let express = require("express");
let app = express();


//Initial PORT Set-Up
let PORT = process.env.PORT || 8080;

//Data Parsing???
app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(express.static("app/public"));
//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listner
app.listen(PORT, function(){
    console.log("You're connected to PORT: " + PORT);
});