'use strict'

const app = require('./api/api.js');
require('./api/users.js');

app.listen(3000, () => {
  console.log('Server = Happy');
  })
































//
//
// const bodyParser = require('body-parser');
// const express = require('express')
// const colors = require('colors');
//
// const port = 3000;
// const app = express();
//
//
//
// app.use(bodyParser.json())
//
// app.get('/:id', function (req, res) {
//   res.send({
//     username: 'Mackenzie Van Leuvan',
//     url: 'MacDaddy.com'
//   })
// })
//
// app.post('/adduser', function (req, res) {
//   console.log(req.body);
//   res.send('success')
// })
//
// // app.patch()
// //
// // app.delete()
// //
// // app.put()
//
// app.listen(port, () => {
//   console.log('app starting on port 3000'.blue);
// })
//
// console.log('is it working?');
