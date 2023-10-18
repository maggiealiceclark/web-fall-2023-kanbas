import db from "../../Database";
import { useParams } from "react-router-dom";
import {BiCog} from 'react-icons/bi';
import {FaFileImport} from 'react-icons/fa';
import {BiSolidFileImport} from 'react-icons/bi';
import {FiFilter} from 'react-icons/fi';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1 style={{ position: 'relative', top: '40px', }}>Grades</h1>
      <button
        type="button"
        className="float-end rounded"
        style={{ position: 'relative', right: '280px', top: '0px', height: '30px', border: 'none', width: '100px' }}
      > <FaFileImport style={{ marginRight:'5px' }}/>Import
      </button>
      <select
        className="rounded"
        style={{ position: 'relative', 
        right: '-910px', height: '30px', width: '120px', top: '0px', border: 'none', backgroundColor: 'rgb(234, 234, 234)' }}
      >
        <option selected value=" Export">
          < BiSolidFileImport style={{ marginRight:'5px' }}/> Export All
        </option>
      </select>
      <button
        className="rounded"
        type="button"
        style={{ position: 'relative', right: '-915px', top: '0px', border: 'black', height: '30px' }}
      >
        <  BiCog style={{ color: '#4c4c4d' }}/> 
      </button>
        <h5 style={{ position: 'relative', top: '50px', right: '0px', color:'black' }}> Student Names</h5>
      <input
        type="text"
        placeholder=  "Search Students"
        style={{ top: '50px', position: 'relative' }}
      />
        <h5 style={{ position: 'relative', right: '-315px', top:'-10px'}}> Assignment Names</h5>
      <input
        type="text"
        placeholder="Search Assignments"
        style={{ position: 'relative', right: '-310px', top: '-10px', width:'200px' }}
      />
      <button type="button" 
      style={{ color: '#3e3f41', position: 'relative', top: '45px', left:'-200px'}}>
         < FiFilter/> Apply Filters
      </button>

      <div className="table-responsive"  style={{ marginTop:'60px' }}>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;


