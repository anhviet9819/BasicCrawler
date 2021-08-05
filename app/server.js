//require dependencies
const logger = require('morgan');
const express = require('express');

//create an express application
const app = express();

//config port
const port = process.env.PORT || 3000;
app.set('port', port);

//load middlewares
app.use(logger('dev'));

//start server and listen
app.listen(port, () => console.log(`App started on port ${port}.`));