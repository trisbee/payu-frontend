import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

require('dotenv').config();
require('request-to-curl');

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the PayU frontend',
}));


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});