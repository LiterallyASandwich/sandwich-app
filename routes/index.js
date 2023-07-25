var express = require('express');
var router = express.Router();
const passport = require('passport');



router.get('/', function(req, res, next) {
    res.redirect('/sandwiches');
  });

  router.get('/auth/google', passport.authenticate(
    'google',
    {
        scope: ['profile', 'email'],
    }
    ));

    router.get('/oauth2callback', passport.authenticate(
        'google',
        {
          successRedirect: '/sandwiches',
          failureRedirect: '/sandwiches'
        }
      ));

      router.get('/logout', function(req, res){
        req.logout(function() {
          res.redirect('/sandwiches');
        });
      });
      
      module.exports = router;