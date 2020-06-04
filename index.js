const express = require("express")
const bodyParser = require("body-parser")
// require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000

let items = [];

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = new Date()

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  let day = today.toLocaleDateString("en-US", options)

  console.log(typeof(items))
  // if (items.length > 0) {
  //   items.forEach(function(item) {
  //     console.log(item)
  //   })
  // }

  res.render('list', {day: day, newItems: items})
})

app.post("/", function(req, res) {
  items.push(req.body.newItem)
  res.redirect("/")
})

app.listen(port, function(){
  console.log(`Server started on port ${port}`)
})