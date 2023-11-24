var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini messageboard",messages: messages });
});

router.get("/new", (req, res, next) =>{
  res.render("form", {title: "Add your message"})
})

router.post("/new", (req, res, next) => {

  const {userInput, textInput} = req.body
  const obj = { user: userInput, text: textInput, added: new Date() }
  messages.push(obj)
  res.redirect("/")
})



module.exports = router;
