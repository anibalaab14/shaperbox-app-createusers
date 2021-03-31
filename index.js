const StatusCodes = require('http-status-codes');
require('dotenv').config();
require('./conectiondb.js');
const Users = require('./models/users.js');

const express = require('express');
const app = express()
app.use(express.json());


app.post('/shaperbox/v1/app-createUser', function (req, res) {

  const users = new Users({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    pass: req.body.pass,
    email: req.body.email,
    direccion: req.body.direccion,
    id: req.body.id,
    age: req.body.age,

  });
  users.save((err, document) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusDescription: 'Internal Server Error'
      });


    } else {
      console.log(document);
      res.send({
        status: "200"
      });
    }
  });

})


app.listen(process.env.PORT);
console.log(process.env.PORT);