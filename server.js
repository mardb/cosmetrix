//import dependencies 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Port
const PORT = process.env.PORT || 4000;

//setup db
const routes = require('./routes');

//middleware
app.use(express.static(__dirname + '/public/'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//api routes
app.use('/', routes.views);
app.use('/api/v1', routes.api);

//starts the server 
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))