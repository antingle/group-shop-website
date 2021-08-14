var request = require("request");

let people = 1;

export default function handler(req, res) {
  res.status(200).send();
  var options = {
    method: "POST",
    url: `https://api.sendfox.com/contacts?email=${req.body.email}&lists[]=274839`,
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  request(options, function (error, response) {
    if (error) console.log(error);
    console.log(people, JSON.parse(response.body).email);
    people++;
  });
}
