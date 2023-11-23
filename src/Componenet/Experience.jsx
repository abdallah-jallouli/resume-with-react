import React from "react";

const Experience = () => {
  const experiences = [
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
  ];
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: "700", fontSize: "26px" }}>
        Expériences Professionnelles
      </h3>
      {experiences.map((el) => (
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
  );
};

export default Experience;
