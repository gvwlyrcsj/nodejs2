const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routes/router'); 

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', Router); 

app.listen(3000, () => {
    console.log('Server initialized on http://localhost:3000');
});
