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
knex.schema.dropTableIfExists('students');
knex.schema.dropTableIfExists('teachers');
knex.schema.dropTableIfExists('parents');
knex.schema.dropTableIfExists('logs');
knex.schema.dropTableIfExists('emotional_state_data');
knex.schema.dropTableIfExists('interest_and_engagement_data');
knex.schema.dropTableIfExists('interpersonal_skills_data');
knex.schema.dropTableIfExists('attendance_data');
knex.schema.dropTableIfExists('maturity_data');
// knex.schema.dropTable('users');

bookshelf.knex.schema.hasTable('teachers').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('teachers', function(teacher) {
      teacher.increments('id').primary();
      teacher.string('first_name', 100);
      teacher.string('last_name', 100);
      // does password go here? and do we want a username field?
      teacher.string('username', 100);
      teacher.string('password', 200);
      teacher.string('email', 200);
      teacher.string('status', 200);
      teacher.timestamps();

    }).then(function (table) {
    console.log('Created Table TEACHERS');
    });
  }
});


bookshelf.knex.schema.hasTable('students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('students', function(student) {
      student.increments('id').primary();
      student.string('first_name', 100);
      student.string('last_name', 100);
      student.string('grade', 3);
      student.string('IEP', 100);
      student.string('pic', 100);
      student.integer('logCount');
      student.integer('teacher_id').unsigned()
      student.foreign('teacher_id').references('id').inTable('teachers');
    }).then(function (table) {
    console.log('Created Table STUDENTS');
    });
  }
});


bookshelf.knex.schema.hasTable('parents').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('parents', function(parent) {
      parent.increments('id').primary();
      parent.string('first_name', 100);
      parent.string('last_name', 100);
      // does password go here? and do we want a username field?
      parent.string('username', 100);
      parent.string('password', 200);
      parent.string('email', 200);
      parent.string('status', 200);
      parent.string('optIn', 100);
      parent.integer('student_id').unsigned();
      parent.foreign('student_id').references('id').inTable('students');
      parent.timestamps();

    }).then(function (table) {
    console.log('Created Table PARENTS');
    });
  }
});


bookshelf.knex.schema.hasTable('teachers_students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('teachers_students', function(table) {
      table.increments('id').primary();
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('id').inTable('students');
      table.integer('teacher_id').unsigned();
      table.foreign('teacher_id').references('id').inTable('teachers');
    }).then(function (table) {
    console.log('Created Table TEACHERS_STUDENTS');
    });
  }
});


bookshelf.knex.schema.hasTable('logs').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('logs', function(table) {
      table.increments('id').primary();
      table.text('log');
      table.integer('teacher_id').unsigned();
      table.foreign('teacher_id').references('id').inTable('teachers');
      table.string('teacher',100);
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('id').inTable(
        'students');
      table.integer('types');
      table.string('other', 200);
    }).then(function (table) {
    console.log('Created Table LOGS');
    });
  }
});


bookshelf.knex.schema.hasTable('emotional_state_data').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('emotional_state_data', function(emotionalStateEntry) {
      // General Info
      emotionalStateEntry.increments('id').primary();
      emotionalStateEntry.date('date');

      // Emotional State Section
      emotionalStateEntry.number('morning_mood_score');
      emotionalStateEntry.number('noon_mood_score');
      emotionalStateEntry.number('end_mood_score');

      // Teacher Notes Section
      emotionalStateEntry.string('teacher_notes', 400);

      // Foreign Keys
      emotionalStateEntry.integer('student_id').unsigned();
      emotionalStateEntry.foreign('student_id').references('students.id');
      emotionalStateEntry.integer('teacher_id').unsigned();
      emotionalStateEntry.foreign('teacher_id').references('teacher.id');

      // Time Stamp
      emotionalStateEntry.timestamps();
    }).then(function (table) {
    console.log('Created Table EMOTIONAL_STATE_DATA', table);
    });
  }
});


bookshelf.knex.schema.hasTable('interest_and_engagement_data').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('interest_and_engagement_data', function(interestEngagementEntry) {
      // General Info
      interestEngagementEntry.increments('id').primary();
      interestEngagementEntry.date('date');

      // Reading Section
      interestEngagementEntry.number('r_performance_score');
      interestEngagementEntry.number('r_participation_score');
      interestEngagementEntry.number('r_enjoyment_score');
      interestEngagementEntry.number('r_interest_score');
      interestEngagementEntry.number('r_repeatability_score');

      // Writing Section
      interestEngagementEntry.number('w_reading_performance_score');
      interestEngagementEntry.number('w_participation_score');
      interestEngagementEntry.number('w_enjoyment_score');
      interestEngagementEntry.number('w_interest_score');
      interestEngagementEntry.number('w_repeatability_score');

      // Math Section
      interestEngagementEntry.number('m_reading_performance_score');
      interestEngagementEntry.number('m_participation_score');
      interestEngagementEntry.number('m_enjoyment_score');
      interestEngagementEntry.number('m_interest_score');
      interestEngagementEntry.number('m_repeatability_score');

      // Teacher Notes Section
      interestEngagementEntry.string('teacher_notes', 400);

      // Foreign Keys
      interestEngagementEntry.integer('student_id').unsigned();
      interestEngagementEntry.foreign('student_id').references('students.id');
      interestEngagementEntry.integer('teacher_id').unsigned();
      interestEngagementEntry.foreign('teacher_id').references('teacher.id');

      // Time Stamp
      interestEngagementEntry.timestamps();
    }).then(function (table) {
    console.log('Created Table INTEREST_AND_ENGAGEMENT_DATA', table);
    });
  }
});


bookshelf.knex.schema.hasTable('interpersonal_skills_data').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('interpersonal_skills_data', function(interpersonalSkillsEntry) {
      // General Info
      interpersonalSkillsEntry.increments('id').primary();
      interpersonalSkillsEntry.date('date');

      // Cooperation With Teacher and Aids Section
      interpersonalSkillsEntry.number('coop_listen_to_instruction_score');

      // One-on-One Interactions Section
        // Empathy Sub-Section
        interpersonalSkillsEntry.number('1on1_cheering_up_others_score');
        interpersonalSkillsEntry.number('1on1_empowering_others_score');
        // Selflessness Sub-Section
        interpersonalSkillsEntry.number('1on1_helping_others_score');
        interpersonalSkillsEntry.number('1on1_sharing_score');

      // Classroom Dynamics Section
      interpersonalSkillsEntry.number('cd_behavior_score');
      interpersonalSkillsEntry.number('cd_morale_score');

      // Teacher Notes Section
      interpersonalSkillsEntry.string('coop_notes', 400);
      interpersonalSkillsEntry.string('1on1_notes', 400);
      interpersonalSkillsEntry.string('cd_notes', 400);

      // Foreign Keys
      interpersonalSkillsEntry.integer('student_id').unsigned();
      interpersonalSkillsEntry.foreign('student_id').references('students.id');
      interpersonalSkillsEntry.integer('teacher_id').unsigned();
      interpersonalSkillsEntry.foreign('teacher_id').references('teacher.id');

      // Time Stamp
      interpersonalSkillsEntry.timestamps();
    }).then(function (table) {
    console.log('Created Table INTERPERSONAL_SKILLS_DATA', table);
    });
  }
});


bookshelf.knex.schema.hasTable('attendance_data').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('attendance_data', function(attendanceEntry) {
      // General Info
      attendanceEntry.increments('id').primary();
      attendanceEntry.date('date');

      // Attendance
      attendanceEntry.string('presence', 10);

      // Teacher Notes
      attendanceEntry.string('presence', 400);

      // Foreign Keys
      attendanceEntry.integer('student_id').unsigned();
      attendanceEntry.foreign('student_id').references('students.id');
      attendanceEntry.integer('teacher_id').unsigned();
      attendanceEntry.foreign('teacher_id').references('teacher.id');

      // Time Stamp
      attendnaceEntry.timestamps();
    }).then(function (table) {
    console.log('Created Table ATTENDANCE_DATA', table);
    });
  }
});


bookshelf.knex.schema.hasTable('maturity_data').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('maturity_data', function(maturityEntry) {
      // General Info
      maturityEntry.increments('id').primary();
      maturityEntry.date('date');

      // General Maturity Section
      maturityEntry.number('response_general_score');
      maturityEntry.number('response_adversity_score');

      // Disability Management Section
      maturityEntry.number('disability_induced_stress_general_score');
      maturityEntry.number('disability_induced_stress_trigger_score');
        maturityEntry.number('trigger_response_decision_score');
        maturityEntry.number('behavioral_output_score');

      // Teacher Notes Section
      maturityEntry.string('general_maturity_notes', 400);
      maturityEntry.string('disability_management_notes', 400);

      // Foreign Keys
      maturityEntry.integer('student_id').unsigned();
      maturityEntry.foreign('student_id').references('students.id');
      maturityEntry.integer('teacher_id').unsigned();
      maturityEntry.foreign('teacher_id').references('teacher.id');

      // Time Stamp
      maturityEntry.timestamps();
    }).then(function (table) {
    console.log('Created Table MATURITY_DATA', table);
    });
  }
});



module.exports = bookshelf;