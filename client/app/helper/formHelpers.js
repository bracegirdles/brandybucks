import axios from 'axios'

exports.addEmotionalStateData = (emotionalStateEntry) => {
  return axios({
    method: 'POST',
    url: 'api/emotionalStateData',
    data: emotionalStateEntry
  });
};