// api/index.js
import axios from 'axios';

// Method to perform the dummy API call
const getDummyData = async (demoFileName) => {
  try {
    const response = await axios.get(`/demo-input-files/${demoFileName}.json`);
    return response.data
  } catch (error) {
    console.error('Error fetching dummy data:', error);
    throw error;
  }
};


export { getDummyData }
