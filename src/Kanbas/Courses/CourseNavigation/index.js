import { NavLink, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings",
  "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
"Announcements", "Pages", "Files" ];
const activeLink = "text-black bg-red";
const inactiveLink = "text-white bg-black";
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  return (
    <div className="list-group sidebar" style={{ width: '10rem',  padding:10, height: "100rem"}}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          style={{
            color: pathname.includes(link) ? "black" : "red",
            background: pathname.includes(link) ? "white" : "white",
            borderLeftColor: pathname.includes(link) ? "black" : "black",
            borderLeftWidth: pathname.includes(link) ? "3px": "3px",
            borderLeftStyle: pathname.includes(link) ? "solid" : "none",
            padding: 10,
            margin: 10,
            textDecoration: "none"
          }}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}


export default CourseNavigation;
 {/* =>
          isActive ? activeLink : inactiveLink } */}
          {/* activeClassName="text-red bg-white"
          isActive={(match, location) => {return match || location.pathname.includes('/active')}} */}