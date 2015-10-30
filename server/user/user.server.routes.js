var User = require('./user.server.controller');

module.exports = function(app){
    app.post('/users', User.create);
    app.get('/users', User.get);
}
