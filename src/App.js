import "./App.css";
import ProposalPage from "./components/Proposal/ProposalPage";
import Wedding from "./components/Wedding/WeddingPage";
import WelcomePage from "./components/WelcomePage";
import { useHistory, Link } from "react-router-dom";

function App() {
 const { push } = useHistory();

 const handleClick = (e) => {
  e.preventDefault();
  push(<ProposalPage />);
 };
 return (
  <>
   <ProposalPage />

   <div className='buttons'>
    <Link
     type='button'
     to='/proposalpage'
     class='btn btn-info'
     onClick={handleClick}>
     Proposal Pictures
    </Link>
    <button type='button' class='btn btn-info'>
     Wedding Pictures
    </button>
    <Wedding />
   </div>
  </>
 );
}

export default App;
