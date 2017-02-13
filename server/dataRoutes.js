var controller = require('./controllers/dataControllers');
var router = require('express').Router();

router.get('/students/name', controller.query.get);
router.get('/students/getAll', controller.studentInfo.get);

router.get('/students/getChildren', controller.studentInfo.getChildren);

router.get('/students/getSearch', controller.query.getSearch);

router.get('/students/getName', controller.studentInfo.getName);

router.post('/students', controller.studentInfo.post);
router.post('/logs', controller.logs.post);
router.get('/logs/getAll', controller.logs.get);

router.get('/message/getParent', controller.message.getParent);

router.get('/message/getStudentEmail', controller.message.getStudentEmail);

module.exports = router;
