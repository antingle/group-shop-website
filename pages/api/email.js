const fetch = require("node-fetch");

// keep track of number of people since deploy
let people = 1;

let options = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

export default function handler(req, res) {
  fetch(
    `https://api.sendfox.com/contacts?email=${req.body.email}&lists[]=${process.env.LIST}`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(people, json.id, json.email);
      people++;
      res.send("Subscribed");
    })
    .catch((error) => console.log("ERROR:", error));
}
