import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Componenet/logo.jpg"; // with import

// import ProfileImage from "./Componenet/ProfileImage";
// import Coordonnee from "./Componenet/Coordonnee";
// import Competence from "./Componenet/Competence";
// import Langue from "./Componenet/Langue";
// import Name from "./Componenet/Name";
// import Profile from "./Componenet/Profile";
// import Formation from "./Componenet/Formation";
// import Experience from "./Componenet/Experience";
// import Certifications from "./Componenet/Certifications";
// import CentreInteret from "./Componenet/CentreInteret";
import React, { Component } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "react-bootstrap";

export default class App extends Component {
  state = {
    profile_name: {
      candidateName: "Abdallah Jallouli",
      profession: "Ingénieur en Génie Industriel",
    },
    profile: {
      title: "Profile Professionnelle",
      descrition:
        "Je suis un ingénieur en génie industriel motivé et dynamique à la" +
        "recherche d'une opportunité de thèse de recherche dans le domaine de" +
        "l'ingénierie industrielle. Mon objectif est d'approfondir mes" +
        "connaissances et de contribuer activement au développement de solutions" +
        "novatrices pour les défis complexes auxquels le secteur industriel est" +
        "confronté.",
    },
    formations: [
      {
        title: "Développement Full Stack",
        date: "Oct. 2023 – Mars 2024 (Prévu)",
        location: "GoMyCode, Sfax",
      },
      {
        title: "INGÉNIERIE EN GÉNIE INDUSTRIEL",
        date: "Sept. 2021 – Sept. 2023",
        location: "Institut International de Technologie, Sfax",
      },
      {
        title: "MASTER DE RECHERCHE EN GÉNIE INDUSTRIEL",
        date: "Sept. 2020 – Jan. 2023",
        location: "Institut Supérieur de Gestion Industrielle, Sfax",
      },
      {
        title: "LICENCE EN MANAGEMENT DES SYSTÈMES INDUSTRIELS",
        date: "Sept. 2017 – Juin 2020",
        location: "Institut Supérieur de Gestion Industrielle, Sfax",
      },
      {
        title: "BACCALAURÉAT SPÉCIALITÉ TECHNIQUE",
        date: "Sept. 2016 – Juin 2017",
        location: "Lycée Ibn Rachik, Sfax",
      },
    ],
    experiences: [
      {
        title: "CONFISERIE TRIKI LE MOULIN | Stage PFE",
        date: "Mars – Juin 2023",
        desc: "Conception et développement d’une application d’ordonnancement dynamique",
        tache1: "Définir les objectifs et les fonctionnalités",
        tache2: "Concevoir l'interface utilisateur",
        tache3: "Développer les fonctionnalités principales",
      },
      {
        title: "PLASTIC SIPA SUD | Stage PFA",
        date: "Mai – Juin 2022",
        desc: "Mise en place d’une démarche d’amélioration continue « Méthode 5S »",
        tache1:
          "Instauration du rangement et de la propreté sur les postes de travail et leur environnement",
        tache2: "Mise en place d'une organisation visuelle",
        tache3:
          "Améliorer les flux de production à travers les actions d’amélioration",
      },
      {
        title: "COGITEL | Stage PFE",
        date: "Janv. – Juin 2020",
        desc: "Réduction du temps de changement d'un motif pour imprimeuse en utilisant l'outil de Lean Management SMED (Gain 105 min)",
        tache1: "Assurer une bonne communication avec tous les intervenants",
        tache2:
          "Analyser les défaillances, les dysfonctionnements et proposer des améliorations",
        tache3: "Normaliser toutes les étapes de réglages",
      },
    ],
    coords: [
      { icon: <FaLocationDot />, para: "Markez Sedra Sakiet Ezzit" },
      { icon: <FaPhoneAlt />, para: "+216 50 870 690" },
      { icon: <SiGmail />, para: "jallouliabdallah16@gmail.com" },
    ],
    competences: [
      "Css",
      "Html",
      "JavaScript",
      "MongoDB",
      "React",
      "C++",
      "Java",
    ],
    certifs: [
      {
        nameCertif: "TCF B2 / DELF B2",
        institue: "Institut Français de Tunisie",
      },
      { nameCertif: "Six Sigma Yellow Belt", institue: "6sigmastudy" },
      { nameCertif: "Introduction to C++ Programming", institue: "Alison" },
      {
        nameCertif: "Python for Data Science,AI&Développement",
        institue: "Coursera",
      },
      {
        nameCertif: "Discovering the Basics of SAP S/4HANA Manufacturing",
        institue: "SAP",
      },
    ],
    centres: [
      "Voyager",
      "Football",
      "Lire des mangas",
      "Dormir",
      "Boire du café",
    ],
    isShow: true,
  };
  handleShow = () => this.setState({ isShow: !this.state.isShow });
  render() {
    return (
      <div className="App">
        <Button variant="outline-warning" onClick={this.handleShow}>
          {this.state.isShow ? "Hide" : "Show"}
        </Button>{" "}
        {this.state.isShow && (
          <div className="main-container">
            <div class="row">
              <div
                class="col-6 col-md-4"
                style={{ marginLeft: "70px", backgroundColor: "#427D9D" }}
              >
                <div className="reframed-image-container">
                  <img src={logo} alt="Reframed" className="reframed-image" />
                </div>
                <hr />
                <h3 style={{ fontWeight: "700" }}>Coordonnées</h3>
                <div className="inside-cord">
                  {this.state.coords.map((el) => (
                    <div className="card-cord">
                      {el.icon}
                      <p className="para-cord">{el.para}</p>
                    </div>
                  ))}
                </div>
                <hr />
                <h3 style={{ fontWeight: "700" }}>Compétences</h3>
                <ul className="list">
                  {this.state.competences.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
                <hr />
                <h3 style={{ fontWeight: "700" }}>Certifications</h3>
                <ul className="list">
                  {this.state.certifs.map((el) => (
                    <li>
                      {el.nameCertif}
                      <span> {el.institue}</span>
                    </li>
                  ))}
                </ul>
                <hr />
                <h3 style={{ fontWeight: "700" }}>Centre d'intérêt</h3>
                <ul className="list">
                  {this.state.centres.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
              <div class="col-6">
                <h1
                  style={{
                    margin: "20px",
                    textAlign: "start",
                    fontWeight: "700",
                  }}
                >
                  {this.state.profile_name.candidateName}
                </h1>
                <h3 className="para-name" style={{ fontWeight: "700" }}>
                  {this.state.profile_name.profession}
                </h3>
                <hr />
                <h3 style={{ fontWeight: "700" }}>
                  {this.state.profile.title}
                </h3>
                <p>{this.state.profile.descrition}</p>
                <hr />
                <h3 style={{ fontWeight: "700" }}>Formation</h3>
                {this.state.formations.map((el) => (
                  <div>
                    <p className="title-form">{el.title}</p>
                    <p className="date-form">{el.date}</p>
                    <p className="location-form">{el.location}</p>
                  </div>
                ))}
                <hr />
                <h3 style={{ fontWeight: "700", fontSize: "26px" }}>
                  Expériences Professionnelles
                </h3>
                {this.state.experiences.map((el) => (
                  <div>
                    <p className="title-form">{el.title}</p>
                    <p className="date-form">{el.date}</p>
                    <p className="desc-exp" style={{ fontWeight: "500" }}>
                      {el.desc}
                    </p>
                    <ul className="list">
                      <li>{el.tache1}</li>
                      <li>{el.tache2}</li>
                      <li>{el.tache3}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="main-container">
//         <div class="row">
//           <div class="col-6 col-md-4" style={{marginLeft:"70px", backgroundColor: "#427D9D"}}>
//             <ProfileImage/>
//             <Coordonnee/>
//             <Competence/>
//             <Langue/>
//             <Certifications/>
//             <CentreInteret/>
//           </div>
//           <div class="col-6">
//             <Name/>
//             <Profile/>
//             <Formation/>
//             <Experience/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
