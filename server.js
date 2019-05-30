
require('dotenv').config();
const express = require('express');
const app = express();

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

const AssistantV1 = require('ibm-watson/assistant/v1');
const ask = require('./controller').ask;

app.use(bodyParser.json(bodyParserJsonConfig()));

const assistant = new AssistantV1({
  version: 'v1',
  iam_apikey: 'iMMUpXeRo-G8YMOiZMXhdyMFMk359X1WaCpSdO6rIOku',
  url: 'https://gateway.watsonplatform.net/assistant/api'
})

app.get('/', (req, res) => res.send('Hola Greg!'))
// app.post('/ask', ask)

app.listen(3000,function(){
	console.log('started server')
})