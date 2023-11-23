import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Coordonnee = () => {
  const coords = [
    { icon: <FaLocationDot />, para: "Markez Sedra Sakiet Ezzit" },
    { icon: <FaPhoneAlt />, para: "+216 50 870 690" },
    { icon: <SiGmail />, para: "jallouliabdallah16@gmail.com" },
  ];
  return (
    <div className="cord">
      <hr />
      <h3 style={{ fontWeight: "700" }}>Coordonnées</h3>
      <div className="inside-cord">
        {coords.map((el) => (
          <div className="card-cord">
            {el.icon}
            <p className="para-cord">{el.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordonnee;
