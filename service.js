const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: process.env.WATSON_VERSION,
  iam_apikey: process.env.API,
  url: process.env.WATSON_URL
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(response);
          resolve(response);
        }
      }
    );
  });