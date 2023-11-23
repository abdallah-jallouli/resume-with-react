import React from "react";

const Formation = () => {
  const formations = [
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
  ];
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: "700" }}>Formation</h3>
      {formations.map((el) => (
        <div>
          <p className="title-form">{el.title}</p>
          <p className="date-form">{el.date}</p>
          <p className="location-form">{el.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Formation;
