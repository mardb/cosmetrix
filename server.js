//import dependencies 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Port
const PORT = process.env.PORT || 4000;


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//starts the server 
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))