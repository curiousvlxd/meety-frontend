import axios from "axios";

interface Meeting {
  name: string;
  agenda: string;
  date: string;
}

export const createMeeting = async (meeting: Meeting) => {
  try {
    return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/meetings`, meeting);
  } catch (error) {
    throw error;
  }
}