/**
 * Created by Mark Webley on 08/01/2020.
 */
import express = require('express');
require('dotenv').config();
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app: express.Application = express();
const port = process.env.PORT || 3000;

const financialTimesRouter = require('./src/routes/financialTimesRouter')();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.set('views', './app/src/views');
app.set('view engine', 'ejs');

app.use('/', financialTimesRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${chalk.green(port)}`)
});
