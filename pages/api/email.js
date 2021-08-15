const fetch = require("node-fetch");
var SibApiV3Sdk = require("sib-api-v3-sdk");

var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

// called from front end to submit email
export default function handler(req, res) {
  let apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = req.body.email;
  createContact.listIds = [8];

  apiInstance.createContact(createContact).then(
    function (data) {
      res.status(200).send("Subscribed");
    },
    function (error) {
      let errorMessage = JSON.parse(error.response.error.text).message;
      res.status(error.status).send(errorMessage);
      console.log(error.status, errorMessage);
    }
  );
}
