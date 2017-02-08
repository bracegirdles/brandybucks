var Teacher = require('../models/teacher');
var Parent = require('../models/parent');
var knex = require('../config.js').knex;
var Student = require('../models/student');


module.exports = {
  // need separate logins for teachers and parents?
  login: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;

      new Teacher({ username: username })
        .fetch()
        .then(function(user) {
          if (!user) {
            // res.send('no user by that name')
            res.redirect('/')
          } else {

            user.comparePassword(password, function(match) {
              if (match) {

                // set the permissions level
                req.session.level = 'loggedIn'

                res.redirect('/')

              } else {
                res.redirect('/')
              }
            });
          }
        });
    }
  },

  signup: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      var email = req.body.email;
      // teacher or parent?
      var status = req.body.status;
      if (status === 'Teacher') {
        new Teacher ({ username: username })
          .fetch()
          .then(function(user) {
            if (!user) {

              var newUser = new Teacher({
                username: username,
                password: password,
                email: email
              });

              newUser.save()
                .then(function(newUser) {

                  // TODO: this would really trigger an email to an admin
                  // who would grant access

                  // set the permissions level (for now)
                  req.session.level = 'loggedIn'

                  res.redirect('/');
                });
            } else {
              // res.send('Account already exists');
              res.redirect('/signup');
            }
          });
      } else if (status === 'Parent') {
        new Parent({ username: username })
          .fetch()
          .then(function(user) {
            if (!user) {

              var newUser = new Parent({
                username: username,
                password: password
              });

              newUser.save()
                .then(function(newUser) {

                  // TODO: this would really trigger an email to an admin
                  // who would grant access

                  // set the permissions level (for now)
                  req.session.level = 'loggedIn'
                  res.redirect('/');
                });
            } else {
              // res.send('Account already exists');
              res.redirect('/signup');
            }
          });
      }
    }
  },

  logout: {

    get: function(req, res) {

      req.session.destroy(function(err) {
        res.redirect('/');
      })
    }
  }
}

