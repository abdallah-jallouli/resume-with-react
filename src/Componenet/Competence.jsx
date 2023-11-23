import React from "react";

const Competence = () => {
  var competences = [
    "Css",
    "Html",
    "JavaScript",
    "MongoDB",
    "React",
    "C++",
    "Java",
  ];
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: "700" }}>Compétences</h3>
      <ul className="list">
        {competences.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Competence;
