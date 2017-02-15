var controller = require('./controllers/dataControllers');
var router = require('express').Router();

router.get('/emotionalStateDataGetAll', controller.emotionalState.getAll);

// router.get('/emotionalStateData', controller.emotionalState.get);

router.post('/emotionalStateData', controller.emotionalState.post);

router.get('/interestEngagementDataGetAll', controller.interestAndEngagement.getAll);

// router.get('/interestEngagementData', controller.interestEngagement.get);

router.post('/interestEngagementData', controller.interestAndEngagement.post);

// router.get('/interpersonalSkillsData', controller.interpersonalSkills.get);

// router.post('/interpersonalSkillsData', controller.interpersonalSkills.post);

// router.get('/attendanceData', controller.attendance.get);

// router.post('/attendanceData', controller.attendance.post);

// router.get('/maturityData', controller.maturity.get);

// router.post('/maturityData', controller.maturity.post);

module.exports = router;

