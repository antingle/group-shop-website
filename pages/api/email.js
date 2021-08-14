const fetch = require("node-fetch");

// keep track of number of people since deploy
let people = 1;

export default function handler(req, res) {
  res.status(200).send();
  let options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  fetch(
    `https://api.sendfox.com/contacts?email=${req.body.email}&lists[]=${process.env.LIST}`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(people, json.email);
      people++;
    })
    .catch((error) => console.log("ERROR:", error));
}
