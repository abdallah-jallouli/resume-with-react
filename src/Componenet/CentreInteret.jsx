import React from "react";

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
    </div>
  );
};

export default CentreInteret;
