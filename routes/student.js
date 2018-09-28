var express = require('express');
var router = express.Router();
var Student = require('../models/student-model').Student;





router.get('/', function(req, res){
  Student.find(function(err, student){
    if(err)
      res.send(err)
    res.json(student);
  });
});

router.post('/', function(req, res){
  var student = new Student();
  student.stuFirNam = req.body.firstName;
  student.stuLasNam = req.body.lastname;
  student.stuEmail = req.body.email;
  student.stuPhone = req.body.phone;

  student.save(function(err){
    if (err)
      res.send(err)
    res.send('~* Student Created *~');
  });
});

module.exports = router;
