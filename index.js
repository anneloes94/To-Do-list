const express = require("express")
const bodyParser = require("body-parser")
// require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {

  let today = new Date();

  let response;

  if (today.getDay() === (6 || 0)) {
    response = "Yay, it's the weekend"
  } else {
    response = "Boooo, I have to work!"
  }

  res.send(response)
})

app.listen(port, function(){
  console.log(`Server started on port ${port}`)
})