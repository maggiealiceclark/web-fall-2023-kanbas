import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"; 
import Card from 'react-bootstrap/Card';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group" >
        
      {
        
       modules
       
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            
           <li key={index} className="list-group-item" style={{ width: '35rem',
            backgroundColor:"rgb(250,250,250)", textDecorationColor: "black", padding:10}}>
          <Card style={{ width: '30rem', backgroundColor:"rgb(250,250,250)", 
          textDecorationColor: "black", border: "none", padding:10}}> 
                <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"-2%", top:"20"}} />
                <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"0%", top:"20"}} />
                <Card.Title style={{padding: 5}}> {module.name} 
                <AiOutlineCheckCircle style={{color: "#26a216", position: "absolute", left:"100%"}} /> 
                <BsThreeDotsVertical style={{color: "#252627", position: "absolute", left:"105%"}} />
                </Card.Title>
                
      </Card>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;