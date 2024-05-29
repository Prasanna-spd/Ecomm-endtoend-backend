const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role };
  };
  
  exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTJiOTA2ZGU3ZjU3Y2MxOGZhMzQyYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2Njk3MzUwfQ.t80oz3raL8NRSXqoPCHHIDmOVVWJDRMZoCoQbPXur-o"
  return token;
  };