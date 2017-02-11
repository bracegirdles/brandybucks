var controller = require('./controllers/dataControllers');
var router = require('express').Router();



router.get('/students/name', controller.query.get);

router.get('/students/getAll', controller.studentInfo.get);

router.get('/students/getSearch', controller.query.getSearch);

router.post('/students', controller.studentInfo.post);

router.post('/logs', controller.logs.post);

router.get('/logs/getAll', controller.logs.get);

router.get('/message/getParentEmail', controller.message.getParentEmail);

router.get('/emotionalStateData', controller.emotionalState.get);

router.get('/emotionalStateData', controller.emotionalState.post);

module.exports = router;

