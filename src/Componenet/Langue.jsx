import React from "react";
import { ProgressBar } from "react-bootstrap";

const Langue = () => {
  return (
    <div>
      <hr />
      <h3 style={{fontWeight:"700"}}>Langues</h3>
      <p className="para-lan">Français</p>
      <ProgressBar now={60} style={{marginTop :"-15px"}}/>
      <p className="para-lan">Anglais</p>
      <ProgressBar now={40} style={{marginTop :"-15px"}}/>
      <p className="para-lan">Arabe</p>
      <ProgressBar now={80} style={{marginTop :"-15px"}}/>
    </div>
  );
};

export default Langue;
