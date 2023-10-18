import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../images/NU_PMSc_Notched-N_wordmark_RW.png";
import {HiOutlineNewspaper} from "react-icons/hi";

function Dashboard() {
  const courses = db.courses;
  return (
    <div container-fluid >
      <h1 style={{padding:"20px"}}>Dashboard</h1>
      <h2 style={{padding:"10px"}}>Published Courses (6)</h2>
      <hr style={{padding:"10px"}} />
      <div className="list-group container-fluid" style={{margin:"20px"}}>
        {courses.map((course) => (
          <Row xs={1} md={2} className="container-fluid" style={{padding:"20px"}}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="container-fluid" style={{margin:"20px"}}>
                  <Card.Img style={{marginTop:"20px"}} src={require('../images/NU_PMSc_Notched-N_wordmark_RW.png')}
        height="200" />
                
                  <Card.Body>
                    <Card.Title>
                      <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item"
                        style={{ textDecoration: "none", border: "none" } }
                      >
                        {course.name}
                      </Link>
                    </Card.Title>
                    <Card.Text>
                        <HiOutlineNewspaper style={{margin: "5px"}}/>
                        {course.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
