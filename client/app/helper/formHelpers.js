import axios from 'axios'

exports.addEmotionalStateData = (emotionalStateEntry) => {
  return axios({
    method: 'POST',
    url: 'api/emotionalStateData',
    data: emotionalStateEntry
  });
};

exports.addIntersestEngagementData = (interestEngagementEntry) => {
  return axios({
    method: 'POST',
    url: 'api/interestEngagementData',
    data: interestEngagementEntry
  });
};

exports.addInterpersonalSkillsData = (interpersonalSkillsEntry) => {
  return axios({
    method: 'POST',
    url: 'api/interpersonalSkillsData',
    data: interpersonalSkillsEntry
  });
};

exports.addAttendanceData = (attendanceEntry) => {
  return axios({
    method: 'POST',
    url: 'api/attendanceData',
    data: attendanceEntry
  });
};

exports.addMaturityData = (maturityEntry) => {
  return axios({
    method: 'POST',
    url: 'api/maturityData',
    data: maturityEntry
  });
};