import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ name: "" });
  
  const URL = "http://localhost:4000/api/courses";
  const deleteCourse = async (course_id) => {
            const response = await axios.delete(
                `${URL}/${course_id}`
            );
            setCourses(courses.filter((c) => c._id !== course_id));
        };

    const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const findAllCourses = async () => {
    try {
      const response = await axios.get(URL);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
      console.log("Response data:", error.response?.data); // Log the response data if available
    }
  };
  
  useEffect(() => {
    findAllCourses();
  }, []);
  
  


  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
