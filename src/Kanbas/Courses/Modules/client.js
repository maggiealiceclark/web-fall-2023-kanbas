import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";
const API_BASE = process.env.REACT_APP_API_BASE;
// const MODULES_URL = `${API_BASE}/modules`;
export const deleteModule = async (moduleId) => {
    try {
        const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
        return response.status; // Return the HTTP status code
      } catch (error) {
        console.error('Error deleting module:', error);
        // Handle errors if needed
        return -1; // Or some other error code
      }
    };
  

export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
  };
  
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
