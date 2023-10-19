import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './index.css'
import { Link, useParams, useLocation } from "react-router-dom";
import {MdOutlineStorage} from 'react-icons/md';

function BreadcrumbCourse() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pathParts = pathname.split("/");
    
  return (
    <>
    <Breadcrumb style={{textDecoration:"none"}}>
    
<Breadcrumb.Item className='boxhead'>
      <h1 className='boxheaded' style={{padding: 10, fontSize: 20, color: 'red', textDecoration: 'none' , marginTop: '8px' }}>
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