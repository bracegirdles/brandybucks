var controller = require('./controllers/dataControllers');
var router = require('express').Router();



router.get('/students/name', controller.query.get);

router.get('/students/getAll', controller.studentInfo.get);

router.get('/students/getChildren', controller.studentInfo.getChildren);

router.get('/students/getSearch', controller.query.getSearch);

router.post('/students', controller.studentInfo.post);

router.post('/logs', controller.logs.post);

router.get('/logs/getAll', controller.logs.get);

router.get('/message/getParentEmail', controller.message.getParentEmail);

// router.get('/emotionalStateData', controller.emotionalState.get);

// router.get('/emotionalStateData', controller.emotionalState.post);
//
// router.get('/interestEngagementData', controller.interestEngagement.get);

// router.get('/interestEngagementData', controller.interestEngagement.post);

// router.get('/interpersonalSkillsData', controller.interpersonalSkills.get);

// router.get('/interpersonalSkillsData', controller.interpersonalSkills.post);

// router.get('/attendanceData', controller.attendance.get);

// router.get('/attendanceData', controller.attendance.post);

// router.get('/maturityData', controller.maturity.get);

// router.get('/maturityData', controller.maturity.post);

module.exports = router;

