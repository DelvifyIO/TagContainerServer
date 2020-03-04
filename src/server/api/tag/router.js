var express = require('express');
var router  = express.Router();
const controller = require('./controller');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Entered tag middleware.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/:clientId', controller.getTags);
router.post('/:clientId', controller.addTag);
router.patch('/:clientId/:id', controller.updateTag);
router.delete('/:clientId/:id', controller.removeTag);

module.exports = router;