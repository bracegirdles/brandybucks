var Promise = require('bluebird');

var connection;

if (process.env.NODE_ENV === 'production') {
  connection = process.env.CLEARDB_DATABASE_URL;
} else {
  connection = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myapp',
    charset: 'utf8'
  }
}

var knex = require('knex') ({
  client: 'mysql',
  connection: connection,
  useNullAsDefault: true
});


var bookshelf = require('bookshelf')(knex);

//source: bookshelfjs.org

// var Users = bookshelf.Model.extend({
//   tableName: 'users'
// })

// var Student = bookshelf.Model.extend({
//   tableName: 'students'
// });
//user schemas:

//checks for a table's existence by tableName, resolving with a boolean to signal if the table exists
// knex.schema.dropTableIfExists('students');
bookshelf.knex.schema.hasTable('students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('students', function(student) {
      student.increments('id').primary();
      student.string('first_name', 100);
      student.string('last_name', 100);
      student.string('grade', 3);
      student.string('IEP', 100);
      student.string('pic', 100);
      student.integer('logCount')
      student.foreign('teacher_id').references('teachers.id');
    }).then(function (table) {
    console.log('Created Table STUDENTS', table);
    });
  }
});

// knex.schema.dropTableIfExists('users');
bookshelf.knex.schema.hasTable('teachers').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('teachers', function(teacher) {
      teacher.increments('id').primary();
      teacher.string('first_name', 100);
      teacher.string('last_name', 100);
      teacher.string('type', 100);

      // does password go here? and do we want a username field?
      teacher.string('username', 100);
      teacher.string('password', 200);
      teacher.string('email', 200);
      teacher.timestamps();

    }).then(function (table) {
    console.log('Created Table TEACHERS', table);
    });
  }
});

bookshelf.knex.schema.hasTable('parents').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('parents', function(parent) {
      parent.increments('id').primary();
      parent.string('first_name', 100);
      parent.string('last_name', 100);
      parent.string('type', 100);

      // does password go here? and do we want a username field?
      parent.string('username', 100);
      parent.string('password', 200);
      parent.string('email', 200);
      parent.foreign('student_id').references('students.id');
      parent.timestamps();

    }).then(function (table) {
    console.log('Created Table PARENTS', table);
    });
  }
});

bookshelf.knex.schema.hasTable('teachers_students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('teachers_students', function(table) {
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('students.id');
      table.integer('teacher_id').unsigned();
      table.foreign('teacher_id').references('teachers.id');
    }).then(function (table) {
    console.log('Created Table TEACHERS_STUDENTS', table);
    });
  }
});


bookshelf.knex.schema.hasTable('logs').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('logs', function(table) {
      table.increments('id').primary();
      table.text('log');
      table.integer('teacher_id').unsigned();
      table.foreign('teacher_id').references('teacher_id');
      table.string('teacher',100);
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('student.id');
      table.integer('types');
      table.string('other', 200);
    }).then(function (table) {
    console.log('Created Table LOGS', table);
    });
  }
});




module.exports = bookshelf;