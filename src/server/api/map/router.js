var express = require('express');
var router  = express.Router();
const controller = require('./controller');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Entered client middleware.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/:clientId', controller.getMaps);
router.post('/:clientId', controller.addMap);
router.patch('/:clientId/:id', controller.updateMap);

module.exports = router;