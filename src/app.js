const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

require ('./controllers/authController')(app);

app.listen(3000)

module.exports = app => app.use('/auth', router);