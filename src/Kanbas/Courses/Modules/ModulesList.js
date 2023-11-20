import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  updateModule,
  setModule,
  setModules,
  deleteModule as deleteModuleAction,
} from "./modulesReducer";
import {findModulesForCourse, createModule} from "./client";
import * as client from "./client";
function ModuleList() {
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      if (status === 200) {
        // Dispatch the deleteModule action after successful deletion
        dispatch(deleteModuleAction(moduleId));
      } else {
        // Handle other status codes or errors if needed
      }
    });
  };

  

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  return (
    <ul className="list-group ">
      <li className="list-group-item" style={{height:"150px", width:"560px"}}>
        <Button
          variant="danger"
          onClick={handleAddModule}>
          Add
        </Button>
        <Button
          variant="secondary"
          style={{ margin: "10px", backgroundColor: "#d3d3d3", color: "black" }}
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </Button>
        <h6
          style={{
            position: "relative",
            left: 180,
            top: -45,
            width: 150,
            height: 50,
          }}
        >
          
          Module Name
        </h6>
        <textarea
          style={{
            position: "relative",
            left: 170,
            top: -85,
            width: 145,
            height: 50,
            margin: "10px",
          }}
          label="Module Name"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <h6
          style={{
            position: "relative",
            left: 350,
            top: -180,
            width: 200,
            height: 100,
          }}
        >
          
          Module Description
        </h6>
        <textarea
          style={{
            position: "relative",
            left: 350,
            top: -258,
            width: 180,
            height: 50,
          }}
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{
              width: "35rem",
              backgroundColor: "rgb(250,250,250)",
              textDecorationColor: "black",
              padding: 10,
            }}
          >
            <Button variant="danger" style={{margin:"5px"}} onClick={() => dispatch(setModule(module))}>Edit</Button>
            <Button variant="secondary"
          style={{ margin: "10px", backgroundColor: "#d3d3d3", color: "black" }}
          onClick={() => handleDeleteModule(module._id)}
          >              Delete
            </Button>

            <Card
              style={{
                width: "30rem",
                backgroundColor: "rgb(250,250,250)",
                textDecorationColor: "black",
                border: "none",
                padding: 10,
              }}
            >
              <BsThreeDotsVertical
                style={{
                  color: "#252627",
                  position: "absolute",
                  left: "-2%",
                  top: "20",
                }}
              />
              <BsThreeDotsVertical
                style={{
                  color: "#252627",
                  position: "absolute",
                  left: "0%",
                  top: "20",
                }}
              />
              <Card.Title style={{ padding: 5 }}>
                {module.name}
                <AiOutlineCheckCircle
                  style={{
                    color: "#26a216",
                    position: "absolute",
                    left: "100%",
                  }}
                />
                <BsThreeDotsVertical
                  style={{
                    color: "#252627",
                    position: "absolute",
                    left: "105%",
                  }}
                />
              </Card.Title>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </Card>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
