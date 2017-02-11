
var Teacher = require('../../../server/models/teacher');
var Parent = require('../../../server/models/parent');
var Student = require('../../../server/models/student');

var createData = {
  createFakeTeacher: function(req) {
    new Teacher ({ username: req.username })
      .fetch()
      .then(function(user) {
        if (!user) {

          var newUser = new Teacher({
            username: req.username,
            email: req.email,
            first_name: req.first_name,
            last_name: req.last_name,
            password: req.password,
            status: req.status,
          });

          newUser.save()
            .then(function(newUser) {
              console.log('created new teacher')
            });
        }
      })
  },

  createFakeParent: function(req) {
    new Parent({ username: req.username })
      .fetch()
      .then(function(user) {
        if (!user) {

          var newUser = new Parent({
            username: req.username,
            email: req.email,
            first_name: req.first_name,
            last_name: req.last_name,
            password: req.password,
            status: req.status,
            student_id: req.student_id,
          });

          newUser.save()
            .then(function(newUser) {
              console.log('created new parent');
            });
        }
      })
  },

  createFakeStudent: function(req) {
    new Student({first_name: req.first_name})
      .fetch()
      .then(function(student) {
        if (!student) {
          var newStudent = new Student ({
            first_name: req.first_name,
            last_name: req.last_name,
            full_name: req.first_name + ' ' + req.last_name,
            grade: req.grade,
            IEP: req.IEP,
            pic: req.pic,
            teacher_id: req.teacher_id,
          });

          newStudent.save()
            .then(function(student) {
              console.log('created new student')
            });
          }
      })
  }
};

module.exports = createData;
