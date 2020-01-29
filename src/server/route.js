var expressJwt = require('express-jwt/lib');
var path = require('path');

module.exports = function (app) {

    // middleware to use for all requests
    app.use(function (req, res, next) {
        // do logging
        console.log('Entered first middleware.');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, OPTIONS, X-Requested-With, Content-Type, Accept, timezone, Authorization",);
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE",);
        console.log(req.url, req.headers.authorization);
        next(); // make sure we go to the next routes and don't stop here
    });

    // use JWT auth to secure the api
    // app.use('/api', exp/ressJwt({secret: secret.secret}).unless({path: ['/api/user/login', '/api/user/signup']}));

    // server routes ===========================================================
    // handle things like api calls

    // app.use('/app', require('./controllers/AppController'));
    app.use('/api/auth', require('./api/authentication'));
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/client', require('./api/client'));
    app.use('/api/map', require('./api/map'));

    // frontend routes =========================================================
    // route to handle all angular requests
    //
    // app.get('/test/*', function(req, res) {
    //     res.sendfile('./public/test/index.js');
    // });

};