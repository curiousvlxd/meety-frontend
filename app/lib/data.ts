import axios from "axios";

export const getMeetings = async () => {
  try {
    return axios.get(`https://meety-api-stage-286591802638.us-central1.run.app/api/v1/meetings`);
  } catch (err) {
    throw err;
  }
}