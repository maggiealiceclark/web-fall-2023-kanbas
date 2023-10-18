import Breadcrumb from 'react-bootstrap/Breadcrumb';
import db from "../../Database";
import { Link, useParams, useLocation } from "react-router-dom";
import {MdOutlineStorage} from 'react-icons/md';

function BreadcrumbCourse() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings",
    "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
  "Announcements", "Pages", "Files" ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pathParts = pathname.split("/");
  const bc = []
    
    const course = db.courses.find((course) => course._id === courseId);
  return (
    <>
    <Breadcrumb>
    
<Breadcrumb.Item >
      <h1 style={{padding: 10, fontSize: 20, color: 'red', textDecoration: 'none', marginTop: '8px' }}>
      <MdOutlineStorage style={{color: 'red', marginRight: '10px', marginLeft: '20px'}}/>
       {pathParts[3]} </h1>
      </Breadcrumb.Item>
      <Breadcrumb.Item active style={{padding: 10, fontSize: 20, color: 'black', marginLeft: '-10px', marginBottom: '8px', marginTop: '5px', textDecoration: 'none'}} >
      {pathParts[4]}
      </Breadcrumb.Item>
    </Breadcrumb>
    </>
  );
}

export default BreadcrumbCourse;