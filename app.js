const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const tmRoutes = require('./routes/tm');

const app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//   );
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

app.use(cors());

app.use('/tm', tmRoutes);

app.listen(8080, console.log('listen on 8080'));
