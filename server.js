const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started successfully at PORT: ${PORT}`)
})

// body parser
app.use(express.json());

//default route

app.get('/', (req, res) =>{
    res.send(`<h1>This is a Blog App</h1>`)
})

// route mounting
const router = require('./routes/allRoutes');
app.use('/api/v1', router);

// DB connect

const dbConnect = require('./config/database');
dbConnect();

