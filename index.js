const express = require("express")
const bodyParser = require("body-parser")
// require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = (new Date()).getDay();

  let day;

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  if (today === (6 || 0)) {
    day = "Weekend"
    res.render
  } else {
    day = "Weekday"
  }


  res.render('list', {kindOfDay: day, dayName: days[today]})
})

app.listen(port, function(){
  console.log(`Server started on port ${port}`)
})