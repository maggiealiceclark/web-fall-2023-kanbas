import { Link, useLocation } from "react-router-dom";
import './index.css';
import {MdAccountCircle} from 'react-icons/md';
import {BsSpeedometer2} from 'react-icons/bs';

function KanbasNavigation() {
  const links = [ <MdAccountCircle style={{fontSize: "50px"}}/>, "Account", 
  <BsSpeedometer2 style={{fontSize: "30px"}}/>,"Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();
//   const Icon = icons[ <MdAccountCircle style={{fontSize: "50px"}}/>]

  return (
    
    <div bg="dark"  className="list-group wd-kanbas-navigator" >
      
      {links.map((link, index) => (
        
       
        <Link 
          key={index}
          to={`/Kanbas/${link}`}
          style={{
            
            margin: 7,
            textDecoration: "none",
            
            padding: 10,
            textAlign: "center",
            color: pathname.includes(link) ? "red" : "white",
            background: pathname.includes(link) ? "white" : "black"
          }}
         >
       
          {link}
        </Link>
      ))}
      
    </div>
  );
}
export default KanbasNavigation;