import React from "react";
import { Button } from "react-bootstrap";

const CentreInteret = () => {
  var centres = [
    "Voyager",
    "Football",
    "Lire des mangas",
    "Dormir",
    "Boire du café",
  ];
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: "700" }}>Centre d'intérêt</h3>
      <ul className="list">
        {centres.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <Button variant="outline-warning">Hide</Button>{' '}
    </div>
  );
};

export default CentreInteret;
