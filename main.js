require('dotenv').config();
const express = require('express');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

app.use(bodyParser.json(bodyParserJsonConfig()));

const ask = require('./controller').ask;

app.get('/', (req, res) => res.send('it is working- backend for chatbot'))
app.post('/ask', ask)

app.listen(3001,function(){
	console.log('main.js is running port 3000');
})





