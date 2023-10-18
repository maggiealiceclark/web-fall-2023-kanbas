import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {BsThreeDotsVertical} from 'react-icons/bs';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
//  < AiOutlineCheckCircle /> <-- For Publish All Button

function Buttons() {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups" style={{padding: 15, marginTop:20}} >
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}>Collapse All</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2 buttons-gray" aria-label="Second group">
        <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}} >View Progress</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Third group" >
      <DropdownButton variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}  as={ButtonGroup}  title="Publish All" id="bg-nested-dropdown" >
        
        <Dropdown.Item  style={{backgroundColor: "#d3d3d3", color:"black"}} eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Fourth group">
        <Button variant="danger" > <AiOutlinePlus/> Modules </Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Fifth group">
        <Button variant="secondary" style={{backgroundColor: "#d3d3d3", color:"black"}}> <BsThreeDotsVertical/> </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Buttons;