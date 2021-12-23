import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Proposal from "./components/Proposal";
import Wedding from "./components/Wedding";
function App() {
 return (
  <div className="App">
   <div className="buttons">
    <button>Proposal Pictures</button>
    <button>Wedding Pictures</button>
   </div>
   <Proposal />
   {/* <Wedding /> */}
  </div>
 );
}

export default App;
