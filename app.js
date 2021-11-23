const express = require("express");
const moongose=require('mongoose')
const app = express();
require('dotenv')
const pageRoutes=require('./routes/pageRoutes')
const taskRoutes=require('./routes/taskRoutes')
const authRoutes=require('./routes/authRoutes')


//DB CONNECTİON
moongose.connect(process.env.DB_URL,(error,res)=>{
    if(error){
        res.send('Error is '+error)
    }else{
        console.log('Db Connected Succesfuly')
    }
})

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRoutes);
app.use("/about", pageRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is runnig");
});
