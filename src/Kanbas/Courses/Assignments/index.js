import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import {AiOutlineCheckCircle} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const groupButtonStyle = {
    backgroundColor: '#d3d3d3', // Light gray
    border: '1px solid black',
    color: 'black',
    borderRadius: '7px',
    position:"relative", 
    left:"5%",
    padding:5
  };
  const assignmentButtonStyle = {
    backgroundColor: '#FF0000', // red
    
    border: '1 px solid #FF0000',
    textColor:'white',
    color: 'black',
    position:"relative",
    padding:7,
    left:"5%",
    margin: '10px'
  };
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
    <div style={{position:"relative", left: '0%',
        bottom: '50%', marginTop:"10px"}}>
    <div >
      <textarea style={{position:"relative", left: '0%',
        marginTop:"100px", marginBottom: '-25px'}} rows="1" cols="50" placeholder="Search for Assignments"></textarea>
    </div>
    <div className="container" style={{position:"relative", left: '70%',
         marginTop:"-30px"}}>
            <Button style={groupButtonStyle}> <AiOutlinePlus/> Group</Button> 
      <Button style={assignmentButtonStyle}> <AiOutlinePlus/> Assignment</Button> 
      <Button style={groupButtonStyle}> <BsThreeDotsVertical/> </Button>
    </div>
  </div>
  <hr/>
      <ul className="list-group module-list" style={{position:"relative", left: '0%',
        bottom: '50%', marginTop:"50px"}}>
      <li className="list-group-item list-group-item-secondary" >
      <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"-2%", top:"20"}} />
         <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"0%", top:"20"}} />
        <h2>ASSIGNMENTS <AiOutlinePlus style={{ position: "absolute", left:"93%", top: '15'}}/>
         <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"96%", top: '15'}} /></h2>
          </li>
    
    </ul>
      <div className="list-group" >
        {courseAssignments.map((assignment) => (
            <li className="list-group-item" >
           <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"-2%", top:"20"}} />
         <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"0%", top:"20"}} />
            <Link 
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
            style={{border: "none", fontSize: "20px"}}>
                <GoChecklist style={{color: "#26a216", margin:"5px"}}/>
                
            {assignment.title}
            <AiOutlineCheckCircle style={{color: "#26a216", position: "absolute", left:"95%", fontWeight: 'bold'}} />
            <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"97%"}} /> 
          </Link>
                 </li>
        
        ))}
      </div>
    </div>
  );
}
export default Assignments;