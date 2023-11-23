import React from "react";

const Certifications = () => {
  var certifs = [
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
  ];

  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: "700" }}>Certifications</h3>
      <ul className="list">
        {certifs.map((el) => (
          <li>
            {el.nameCertif}
            <span> {el.institue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
