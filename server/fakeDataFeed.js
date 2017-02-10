var fakeStudentData = require('../fakeData/fakeStudentData.json');
var fakeLogData = require('../fakeData/fakeLogData.json');
var fakeTeacherData = require('../fakeData/fakeTeacherData.json');
var fakeParentData = require('../fakeData/fakeParentData.json');
var createFakeTeacher = require('../client/app/helper/createDataHelpers').createFakeTeacher;
var createFakeParent = require('../client/app/helper/createDataHelpers').createFakeParent;
var createFakeStudent = require('../client/app/helper/createDataHelpers').createFakeStudent;
var Log = require('./models/log')

// import {createFakeTeacher, createFakeParent, createFakeStudent} from ('../client/app/helper/createDataHelpers').create;

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


// knex.batchInsert('students', fakeData)
// .then(function(err) {
// 	if(err){
// 		console.log('error has occured in inserting fakeData');
// 		throw err;
// 	} else {
// 		console.log('fakeData inserted successfully!')
// 	}
// });

// console.log(fakeLogData.length);

// for(var i=0; i < fakeLogData.length; i++) {


// 	knex('logs').insert(fakeLogData[i])
// 	.then(function(){
// 		console.log('log saved');
// 	})

// 	knex('students')
//     .where('id', '=', fakeLogData[i].student_id)
//     .increment('logCount', 1)
//     .then(function() {
//       console.log('info updated');
//   });

// }




