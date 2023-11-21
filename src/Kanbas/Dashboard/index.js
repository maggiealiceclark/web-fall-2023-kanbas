import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { HiOutlineNewspaper } from "react-icons/hi";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <Container>
      <h1 style={{ padding: "20px" }}>Dashboard</h1>
      <h5 style={{ padding: "10px" }}> Add a Course!</h5>
      <form>
        <input
          style={{ padding: "10px", margin: "10px" }}
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          style={{ padding: "10px", margin: "10px" }}
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          style={{ padding: "10px", margin: "10px" }}
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          style={{ padding: "10px", margin: "10px" }}
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

        <Button
          variant="danger"
          onClick={(event) => {
            event.preventDefault();
            addNewCourse(course._id);
          }}
          style={{ margin: "10px", float: "right" }}
        >
          Add
        </Button>
        <Button
          variant="secondary"
          style={{
            margin: "10px",
            float: "right",
            backgroundColor: "#d3d3d3",
            color: "black",
          }}
          onClick={(event) => {
            event.preventDefault();

            updateCourse(course._id);
          }}
        >
          Update
        </Button>
      </form>

      <h2 style={{ padding: "10px" }}>Published Courses (6)</h2>
      <hr style={{ padding: "10px" }} />
      <Row>
        {courses.map((course) => (
         <Col key={course._id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: "20px" }}>
              <Card.Img
                src={require("../images/NU_PMSc_Notched-N_wordmark_RW.png")}
                style={{ padding: "20px", height:"200" }}
              />
              <Card.Body style={{width:"800px"}}>
                <Card.Title>
                  <Link
                    to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item"
                    style={{ textDecoration: "none", border: "none" }}
                  >
                    <Button
                      variant="secondary"
                      style={{
                        margin: "10px",
                        backgroundColor: "#d3d3d3",
                        color: "black",
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse({...course});
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                    <br />
                    {course.name}
                  </Link>
                </Card.Title>
                <Card.Text>
                  <HiOutlineNewspaper style={{ margin: "5px" }} />
                  {course.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
