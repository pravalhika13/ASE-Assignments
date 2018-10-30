const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var router=express.Router();
const path=require('path');
//Port number
const port = process.env.PORT||3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const request = require('request');
app.use(express.static(path.join(__dirname,'public')));

app.get('/get1',function(req,resp,next){
    console.log(req.query.url);
const request = require('request');
                                                                                                                                 



    const subscriptionKey = '6c660e3adfd7446698c30e611bde5b1a';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect';

//const imageUrl =
    //'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + req.query.url
     + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  resp.send(jsonResponse);
  console.log('JSON Response\n');
  console.log(jsonResponse);

});
});

app.listen(port,function(){
    console.log('Server Started At '+port);
})
