const axios = require('axios').default;

async function getUser(url) {
    let response;
    try {
      response = await axios.get(url);
      response = await response.data;
    } catch (error) {
      console.error(error);
    }
    return response;
}

module.exports = {
    myData : getUser
}