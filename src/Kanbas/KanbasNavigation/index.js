import { Link, useLocation } from "react-router-dom";
import './index.css';
import { IoPersonCircle } from "react-icons/io5";
import {
  AiFillDashboard,
  AiFillPlayCircle,
  AiFillQuestionCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { BiSolidGroup, BiSolidBookBookmark } from "react-icons/bi";
import {
  BsFillCalendarEventFill,
  BsFillArrowRightCircleFill,
  BsFillInboxFill,
} from "react-icons/bs";
import "../images/NU_PMSc_Notched-N_wordmark_RW.png";


function KanbasNavigation() {
    const logo = <img>style={{marginTop:"20px"}} src={require('../images/NU_PMSc_Notched-N_wordmark_RW.png')}
    height="200" </img>;
    const links = [
        // {label: "", icon: logo},
            {label: "Signin", icon: IoPersonCircle },
            {label: "Signup", icon: IoPersonCircle },
        { label: "Dashboard", icon: AiFillDashboard },
        { label: "Courses", icon: BiSolidBookBookmark },
        { label: "Group", icon: BiSolidGroup },
        { label: "Calendar", icon: BsFillCalendarEventFill },
        { label: "Inbox", icon: BsFillInboxFill },
        { label: "History", icon: AiFillClockCircle },
        { label: "Studio", icon: AiFillPlayCircle },
        { label: "Commons", icon: BsFillArrowRightCircleFill },
        { label: "Help", icon: AiFillQuestionCircle },
        {label: " ", icon: "none"},
        {label: " ", icon: "none"},
        {label: " ", icon: "none"},
        {label: " ", icon: "none"},
        {label: " ", icon: "none"},
      ];
  const { pathname } = useLocation();
//   const Icon = icons[ <MdAccountCircle style={{fontSize: "50px"}}/>]

  return (
    
    <div bg="dark"  className="list-group wd-kanbas-navigator" >
     <img style={{textAlign:'center', padding:"20px"}} src={require('../images/NU_PMSc_Notched-N_wordmark_RW.png')} alt="NU Logo" />
      {links.map((link, index) => (
    
        <Link 
          key={index}
          to={`/Kanbas/${link.label}`}
          style={{
            
            textDecoration: "none",
            padding:"20px",
            paddingRight: "0px",
            textAlign: "center",
            color: pathname.includes((link.label) || (link.icon) ) ? "red" : "white",
            background: pathname.includes((link.label) || (link.icon)) ? "white" : "black"
          }}
         >
       <div className="kanbas-navigation-icon"
       >
            <link.icon style={{fontSize:"30px"}}/>
          </div>
          <div className="kanbas-navigation-label"
           >
            {link.label
            }
            </div>
        </Link>
      ))}
      
    </div>
  );
}
export default KanbasNavigation;