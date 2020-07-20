const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// setting route
const port =  process.env.PORT || 1080;
app.listen(port, ()=>{
    console.log('Server is running on port ' + port)
});
//joining current path with public folder
app.use(express.static(path.join(__dirname, "Public")))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/', function (req, res) {
    
  })