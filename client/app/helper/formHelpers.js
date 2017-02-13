import axios from 'axios';

exports.getAllEmotionalStateData = (studentId) => {
  return axios.get('api/emotionalStateDataGetAll', {
    params: {
      student_id: studentId
    }
  }); 
};

exports.getIntersestEngagementData = (interestEngagementEntry) => {
  return axios.get('api/interestEngagementData');
};

exports.getInterpersonalSkillsData = (interpersonalSkillsEntry) => {
    return axios.get('api/interpersonalSkillsData');
};

exports.getAttendanceData = (attendanceEntry) => {
    return axios.get('api/attendanceData');
};

exports.getMaturityData = (maturityEntry) => {
  return axios.get('api/maturityData');
};

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