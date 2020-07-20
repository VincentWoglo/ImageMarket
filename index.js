const express = require('express');
const app = express();
const path = require('path')

const port =  process.env.PORT || 1080;
app.listen(port, ()=>{
    console.log('hey')
});
app.use(express.static(path.join(__dirname, "Public")))
