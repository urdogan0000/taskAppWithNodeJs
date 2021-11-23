const express = require("express");
const moongose=require('mongoose')
const app = express();
require('dotenv')
const pageRoutes=require('./routes/pageRoutes')


//DB CONNECTİON
moongose.connect(process.env.DB_URL,(error,res)=>{
    if(error){
        res.send('Error is '+error)
    }else{
        console.log('Db Connected Succesfuly')
    }
})

//middlewares

app.use("/", pageRoutes);
app.use("/about", pageRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is runnig");
});
