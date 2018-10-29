'use strict'

const Users = require('../models/users.js').User

let app = require('./api.js')

app.get('/users', function(req,res) {
  Users.findAll()
  .then((result) => {
    res.send(result)
    console.log(result);
  })
})

// app.get('users/:id', function (req, res) {
//   res.send({
//
//   })
// })

app.delete('/delete-user/:id', function(req,res) {
  Users.destroy({where: {id:req.params.id}})
    .then((result) => {
      res.send('bye bish')
    })
})

app.patch('/update-user', function(req,res) {
  Users.update({
    id: req.body.id,
    phoneNumber:req.body.phoneNumber,
    email:req.body.email,
    age: req.body.age,
    gender: req.body.gender,
  },{
    where: {
      id: req.body.id
    }
  })
})

app.post('/add-user', function(req,res) {
  console.log(req);
    Users.create(req.body)
    .then((user) => {
      users.save();
    })
  })
