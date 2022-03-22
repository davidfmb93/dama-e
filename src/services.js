const axios = require('axios');


const endpoint = ''


export const items = async (query) => {
    try {
        const petition = await axios.get(`${endpoint}/sites/MLA/search?q=${query}`); 
        return petition.data
      } catch (error) {
        console.error(error);
      }
}