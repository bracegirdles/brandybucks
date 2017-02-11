var Teacher = require('../models/teacher');
var Parent = require('../models/parent');
var knex = require('../config.js').knex;

module.exports = {
  // need separate logins for teachers and parents?
  login: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      var status = req.body.status;

      if (status === 'teacher') {
        new Teacher({username: username})
          .fetch()
          .then(function(user) {
            if (!user) {
              // res.send('no user by that name')
              res.redirect('/')
            } else {
              user.comparePassword(password, function(match) {
                if (match) {

                  // set the permissions level
                  req.session.level = 'loggedIn';
                  req.session.status = status;
                  req.session.user = user
                  res.redirect('/')

                } else {
                  res.redirect('/')
                }
              });
            }
          });
      }

      if (status === 'parent') {
        new Parent({ username: username })
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
                  req.session.status = status;
                  req.session.user = user;
                  // localStorage.setItem('status', user.)
                  res.redirect('/')

                } else {
                  res.redirect('/')
                }
              });
            }
          });
      }
    }
  },

  signup: {

    post: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      // teacher or parent?
      var status = req.body.status;
      // console.log('trying to sign up with status ', status)

      if (status === 'teacher') {
        new Teacher ({ username: username })
          .fetch()
          .then(function(user) {
            if (!user) {

              var newUser = new Teacher({
                username: req.body.username,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
                status: status,
              });

              newUser.save()
                .then(function(newUser) {

                  // TODO: this would really trigger an email to an admin
                  // who would grant access

                  // set the permissions level (for now)
                  req.session.level = 'loggedIn'
                  req.session.status = status;
                  res.redirect('/');
                });
            } else {
              // res.send('Account already exists');
              res.redirect('/signup');
            }
          });
      } else if (status === 'parent') {
        // console.log('trying to create parent row');
        new Parent({ username: username })
          .fetch()
          .then(function(user) {
            if (!user) {

              var newUser = new Parent({
                username: req.body.username,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: password,
                status: status,
              });

              newUser.save()
                .then(function(newUser) {

                  // TODO: this would really trigger an email to an admin
                  // who would grant access

                  // set the permissions level (for now)
                  req.session.level = 'loggedIn'
                  req.session.status = status;
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
