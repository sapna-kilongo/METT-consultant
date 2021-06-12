const express = require("express");
const bodyparser = require("body-parser")
const exphbs = require("express-handlebars")
const home = require('./route/home')
const path = require('path')

const port = process.env.PORT || 3000
const app = express();


// body parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

// template engne
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + "/views/layouts/" }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// routes
app.use('/', home);







app.listen(port, () => console.log("sever up on running"));



