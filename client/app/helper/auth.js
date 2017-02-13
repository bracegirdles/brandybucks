import axios from 'axios';

exports.getAllStudents = (user_id) => {
  return axios.get('api/students/getAll', {
    params: {
      user_id: user_id
    }
  })
};

exports.getChildren = (user_id) => {
  return axios.get('api/students/getChildren', {
    params: {
      user_id: user_id
    }
  })
};

exports.getUserStatus = () => {
  return axios.get('api/user/status');
};

exports.getStudentByName = (name) => {
  return axios.get('api/students/name', {
    params: {
    name: name
    }
  })
};

exports.getStudentName = (student_id) => {
  return axios.get('api/students/getName', {
    params: {
      id: student_id,
    }
  })
};

exports.getSearchStudents = (string, user_id, status) => {
  return axios.get('api/students/getSearch', {
    params: {
      name: string,
      user_id: user_id,
      status: status,
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

exports.addMessage = (message) => {
  return axios({
    method: 'POST',
    url:'api/message',
    data: message
  })
};

exports.logout = () => {
  return axios.get('authApi/logout')
};

exports.getStudentEmail = (student_id) => {
  return axios.get('api/message/getStudentEmail', {
    params: {
      student_id: student_id
    }
  })
};

exports.getParent = (student_id) => {
  return axios.get('api/message/getParent', {
    params: {
      student_id: student_id
    }
  })
};

exports.sendEmail = () => {
  return axios.post('api/message/sendEmail')
};
