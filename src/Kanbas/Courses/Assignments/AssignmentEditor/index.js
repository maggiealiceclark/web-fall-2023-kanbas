import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor() {
  const cancelButtonStyle = {
    backgroundColor: "#d3d3d3", // Light gray
    border: "1px solid black",
    color: "black",
    borderRadius: "5px",
    position: "relative",
    left: "80%",
  };
  const saveButtonStyle = {
    backgroundColor: "#FF0000", // red
    color: "black",
    position: "relative",
    left: "81%",
  };
  const { assignment_id } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignment._id
  );
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    dispatch(addAssignment({ ...assignment, course: courseId }));
  };
  return (
    <div>
      <h2 style={{ padding: 0, marginTop: 50 }}>Assignment Name</h2>
      <textarea
        className="form-control mb-2"
        style={{ width: 560 }}
        value={assignment.title}
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <textarea
        style={{
          position: "relative",
          left: -10,
          top: 40,
          height: 50,
          margin: "10px",
          width: 560,
        }}
        label="Assignment Name"
        className="form-control mb-2"
        value={assignment.description}
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, description: e.target.value }))
        }
      />
       
      <h3
        style={{
          position: "relative",
          left: 0,
          top: -60,
          width: 400,
          height: 100,
        }}
      >
        Assignment Description
      </h3>
      <h6
        style={{
          position: "relative",
          left: 0,
          top: -60,
          width: 400,
          height: 100,
        }}
      >
        Points:
      </h6>
      <input
        style={{
          position: "relative",
          left: -10,
          top: -150,
          height: 50,
          margin: "10px",
          width: 560,
        }}
        label="Points"
        title="Points"
        className="form-control mb-2"
        value={assignment.points}
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, points: e.target.value }))
        }
      />
      <ul className="list-group " style={{ position: "relative", top: "0" }}>
        <li
          className="list-group-item"
          style={{
            position: "relative",
            top: -100,
            height: "300px",
            width: "560px",
            margin: "0px",
          }}
        >
          <h6
            style={{
              position: "relative",
              left: -15,
              top: -50,
              width: 400,
              height: 100,
            }}
          >
            Assign:
          </h6>
          <div style={{ position: "relative", top: -100 }}>
            <h6> Due:</h6>
            <input
              style={{ padding: "10px", margin: "10px" }}
              value={assignment.dueDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                updateAssignment({ ...assignment, dueDate: e.target.value })
              }
            />
            <h6> Available From:</h6>
            <input
              style={{ padding: "10px", margin: "10px" }}
              value={assignment.availableFromDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                updateAssignment({
                  ...assignment,
                  availableFromDate: e.target.value,
                })
              }
            />
            <h6> Until: </h6>
            <input
              style={{ padding: "10px", margin: "10px" }}
              value={assignment.availableUntilDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                updateAssignment({
                  ...assignment,
                  availableUntilDate: e.target.value,
                })
              }
            />
          </div>
        </li>
      </ul>
      <hr />

      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn secondary"
        style={cancelButtonStyle}
      >
        Cancel
      </Link>

      <button
        onClick={() => dispatch(addAssignment(assignment))}
        className="btn btn-danger me-2"
        style={saveButtonStyle}
      >
     
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
