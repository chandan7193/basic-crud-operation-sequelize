const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const app = express();



app.use(bodyParser.json());
console.log(keys.mongoURI);
app.get('/',(req,res) =>{
  res.send('Done');
})

// require('./routes/todo')(app);
require('./server/routes')(app);
const PORT = process.env.PORT || 6000;
app.listen(PORT);
