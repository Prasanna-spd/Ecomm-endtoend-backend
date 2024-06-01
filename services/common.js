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
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTgzNjg2NzYxZmE0MWQ1YThjYzA1NyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE3MDU3MTU4fQ.ipjgfJbVuE4NhQuF-A7B7hZcEubetq37r84taJtA44A"
  return token;
  };