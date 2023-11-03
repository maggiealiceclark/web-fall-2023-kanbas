import ModuleList from "./ModulesList";
import Button from "react-bootstrap/Button";
import Buttons from "./buttons";
import sideButtons from "./sideButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// optionally import CSS files as needed
function Modules() {
  return (
    <>
      <div>
        <Buttons />
        <hr />
        <h2 style={{ padding: 10 }}>Modules</h2>

        <ModuleList />
      </div>
    </>
  );
}
export default Modules;
