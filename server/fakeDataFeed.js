var fakeStudentData = require('../fakeData/fakeStudentData.json');
var fakeLogData = require('../fakeData/fakeLogData.json');
var fakeTeacherData = require('../fakeData/fakeTeacherData.json');
var fakeParentData = require('../fakeData/fakeParentData.json');
var createFakeTeacher = require('../client/app/helper/createDataHelpers').createFakeTeacher;
var createFakeParent = require('../client/app/helper/createDataHelpers').createFakeParent;
var createFakeStudent = require('../client/app/helper/createDataHelpers').createFakeStudent;
var Log = require('./models/log')


var knex = require('./config.js').knex;

for (var i = 0; i < fakeTeacherData.length; i++) {
  createFakeTeacher(fakeTeacherData[i]);
}

setTimeout(function() {
  for(var i=0; i < fakeStudentData.length; i++) {
    createFakeStudent(fakeStudentData[i]);
  }
}, 3000);

setTimeout(function() {
  for (var i = 0; i < fakeParentData.length; i++) {
    createFakeParent(fakeParentData[i]);
  }
}, 5000);



