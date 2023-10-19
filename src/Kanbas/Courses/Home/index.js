import ModuleList from "../Modules/ModulesList";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Buttons from "../Modules/buttons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaFileImport} from 'react-icons/fa';
import {TbDatabaseImport} from 'react-icons/tb';
import {LuRadar} from 'react-icons/lu';
import {BsFillBarChartFill} from 'react-icons/bs';
import {BiSolidMegaphone} from 'react-icons/bi';
import {BsBarChart} from 'react-icons/bs';
import {AiOutlineBell} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';

function Home() {
  return (
    <div>
        <Container>
      <Row>
        <Col sm={11} style={{width: 600}}> 
        <Buttons />
        <hr style={{width: '35rem'}}/>
      <ModuleList />
        </Col>
        <Col sm={1} style={{width: '15rem'}}>
        <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
         <Button  variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}} > <FaFileImport/> Import Existing Content</Button> 
             </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}>  <TbDatabaseImport/> Import from Commons </Button> </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <LuRadar/> Choose Home Page </Button> </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <BsFillBarChartFill/> View Course Stream </Button> </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <BiSolidMegaphone/> New Announcement </Button> </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <BsBarChart/> New Analytics </Button> </ButtonGroup>
            <ButtonGroup vertical style={{padding:5, width: "20rem", position: 'relative',
        left: '10%',
        top: '5%'}}>
            <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <AiOutlineBell/> View Course Notifications </Button> </ButtonGroup>
     <div style={{width: '20rem', position: 'relative',
        left: '10%',
        top: '5%'}}>
      <h5>To Do</h5>
      <hr />
      <ul>
        <li>
          <a href="./Modules" className="link-style" style={{color:"rgb(250, 0,0)"}}>
            <AiOutlineCalendar/> Grade A1- ENV + HTML
          </a>
          100 points Sept 18 at 11:59 pm
        </li>
      </ul>

      <h5>
        Coming Up{' '}
        <a href="#" className="link-style" style={{ fontSize: '11px', padding: '6px' }}>
          <AiOutlineCalendar/>View Calendar
        </a>
      </h5>
      <hr />

      <a href="#"  >
      <AiOutlineCalendar/> View Calendar
        <dl style={{ textIndent: '5%', color:"rgb(250, 0,0)"}}>
          <dd>
            <a href="#" className="link-style"> Lecture
            </a>{' '}
            CS4550.12631.202410 Sep 7 at 11:45 am
          </dd>
          <dd>
            <a href="#" className="link-style"> Lecture
            </a>{' '}
            CS4550.12631.202410 Sep 11 at 11:45 am
          </dd>
          <dd>
            <a href="#" className="link-style"> Lecture
            </a>{' '}
            CS4550.12631.202410 Sep 11 at 6:00 pm
          </dd>
        </dl>
      </a>
    </div>
        </Col>
      </Row>
    </Container>
       </div>
  );
}
export default Home;