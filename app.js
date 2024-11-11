const express = require('express');
const app = express();
const PORT=3000;
const mongoose=require('mongoose');
require("dotenv").config();
const path=require('path');
const cors=require('cors');

mongoose.connect(process.env.DB_URI)
app.use(cors());
 
const Healthrouter=require('../project 6/routes/router');
app.use('/api',Healthrouter)
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine");
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});



app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}`);

})


