const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Unsplash = require('unsplash-js').default;
const fetch = require('node-fetch');
global.fetch = fetch;
const toJson = require('to-json');
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
//unsplash api call

//instance (api credentials)
const unsplash = new Unsplash({

  accessKey: "{JPx4o43p9Fe5Z4q4iT9Ndv2rhoSptCkt10wopn3cc-w}",
  secret : "{5NAGcr0eAF0xNvvhACFHFA2wQiS6NRGp4LLas1nWVjA}"
})



  unsplash.photos.listPhotos(2, 15, "latest")
   .then(toJson)
  .then(json => {
      user = unsplash.photos.listPhotos()
      user.then((result)=>{
        console.log(result)
      }
      )
  });