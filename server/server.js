require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const equipeRoutes = require("./routes/equipe");
const contactRoutes = require("./routes/contact");
const diplomeRoutes = require("./routes/diplome");
const entrePriseRoutes = require("./routes/entrePrise");
const continueRoutes = require("./routes/continue");

const cors = require('cors');

const app = express();

app.use(cors());

//middle ware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path ,req.method)
    next()
})

// routes
app.use('/api/equipes',equipeRoutes)
app.use('/api/contact',contactRoutes)
app.use('/api/diplome',diplomeRoutes)
app.use('/api/entrePrise',entrePriseRoutes)
app.use('/api/continue',continueRoutes)


//connect to db

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(" MongoDB Connected!"))
.catch((error) => console.log("MongoDB Connection Error:", error));

//requests
const PORT = process.env.PORT || 5050
app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`)
});


