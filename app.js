const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')

const app = express();

//routes import
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//passing the body from client
app.use(bodyParser.urlencoded({ extended: false }));
//add css
app.use(express.static(path.join(__dirname,'public')));


//use imported routes
app.use("/admin",adminRoutes);
app.use(shopRoutes)

//handle 404
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));

})
app.listen(3000);
