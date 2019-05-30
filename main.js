require('dotenv').config();
const express = require('express');
const app = express();
const AssistantV1 = require('ibm-watson/assistant/v1');
const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

app.use(bodyParser.json(bodyParserJsonConfig()));

// const service = new AssistantV1({
//   version: process.env.WATSON_VERSION,
//   iam_apikey: process.env.API,
//   url: process.env.WATSON_URL
// });
const service = new AssistantV1({
  version: process.env.WATSON_VERSION,
  iam_apikey: process.env.API,
  url: process.env.WATSON_URL
});


service.message({
  workspace_id: '83044c03-e3b5-4401-ac61-9565d4238a9c',
  input: {'text': 'Hello what is this?'}
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err)
  });


app.listen(3000,function(){
	console.log('main.js is running port 3000');
})





