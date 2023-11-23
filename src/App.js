import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileImage from "./Componenet/ProfileImage";
import Coordonnee from "./Componenet/Coordonnee";
import Competence from "./Componenet/Competence";
import Langue from "./Componenet/Langue";
import Name from "./Componenet/Name";
import Profile from "./Componenet/Profile";
import Formation from "./Componenet/Formation";
import Experience from "./Componenet/Experience";
import Certifications from "./Componenet/Certifications";
import CentreInteret from "./Componenet/CentreInteret";
function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div class="row">
          <div class="col-6 col-md-4" style={{marginLeft:"70px", backgroundColor: "#427D9D"}}>
            <ProfileImage/>
            <Coordonnee/>
            <Competence/>
            <Langue/>
            <Certifications/>
            <CentreInteret/>
          </div>
          <div class="col-6">
            <Name/>
            <Profile/>
            <Formation/>
            <Experience/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
