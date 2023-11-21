import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
export const findassignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
