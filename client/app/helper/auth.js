import axios from 'axios';

exports.getAllStudents = () => {
  return axios.get('api/students/getAll')
};

exports.getUserStatus = () => {
  return axios.get('api/user/status');
}

exports.getStudentByName = (name) => {
  return axios.get('api/students/name', {
    params: {
    name: name
    }
  })
};

exports.getSearchStudents = (string) => {
  return axios.get('api/students/getSearch', {
    params: {
      name: string
    }
  })
};

exports.addStudent = (student) => {
  return axios({
    method: 'POST',
    url: 'api/students',
    data: student
  });
};

exports.getAllLogs = () => {
  return axios.get('api/logs/getAll')
};

exports.addLog = (log) => {
  return axios({
    method: 'POST',
    url: 'api/logs',
    data: log
  });
};

exports.logout = () => {
  return axios.get('authApi/logout')
};

exports.getParentEmail = () => {
  return axios.get('api/message/getParentEmail')
};

exports.sendEmail = () => {
  return axios.post('api/message/sendEmail')
};
