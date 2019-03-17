const express = require('express');
const bodyParser = require('body-parser');
const geolocation = require('geolocation');


const index = express();


//middleware
index.set('view engine', 'pug');
index.use(bodyParser.urlencoded({ extended: true })); // ? & +


//routing
index.get('/', function(request, response) {
	return response.redirect('/base');
});





//handlers. These tell the pages what to do.
index.get("/base", (request, response) => {
  console.log('no');   // print no
  
});

if (navigator.geolocation) { //check if geolocation is available and if so, print the location to the console
                navigator.geolocation.getCurrentPosition(function(position){
                  console.log(position);
                });   
            }



//start server
const port = process.env.PORT || 5000;
index.listen(port);
