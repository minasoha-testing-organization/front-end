import "./App.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProposalPage from "./components/Proposal/ProposalPage";
import Wedding from "./components/Wedding/WeddingPage";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
 return (
  <Router>
   <Switch>
    <div className="buttons">
     <button type="button" to="/proposalPage" class="btn btn-info">
      Proposal Pictures
     </button>
     <button type="button" class="btn btn-info">
      Wedding Pictures
     </button>
     {/* <Route path="/proposalpics" component={ProposalPage} /> */}
     {/* <Wedding /> */}
    </div>
   </Switch>
  </Router>
 );
}

export default App;
