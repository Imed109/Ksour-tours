import React from "react";
import styled from "styled-components";
import service1 from "../assests/service1.png";
import service2 from "../assests/service2.png";
import service3 from "../assests/service3.png";
import service4 from "../assests/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Obtenez les meilleurs prix",
      subTitle:
        "Payez via notre application et économisez des milliers et obtenez des récompenses incroyables.",
    },
    {
      icon: service2,
      title: "Sécurité Covid",
      subTitle:
        "Nous avons tous les hôtels sélectionnés qui ont toutes les précautions pour un environnement sûr contre la Covid.",
    },
    {
      icon: service3,
      title: "Paiement flexible",
      subTitle:
        "Profitez du paiement flexible via notre application et obtenez des récompenses à chaque paiement.",
    },
    {
      icon: service4,
      title: "Trouvez le meilleur près de chez vous",
      subTitle:
        "Trouvez les meilleurs hôtels et lieux à visiter près de chez vous en un seul clic.",
    },
  ];
  
  return (
    <StyledServices>
      <SpanStyled>
        <p>
          KSOUR TOUR est une agence de voyage tunisienne CATÉGORIE A et agréé
          IATA. Notre agence a été créée depuis des années. Nous mettons à votre
          disposition toute notre expérience pour vous satisfaire. Nous sommes
          experts dans les voyages de hautes gammes, les voyages sur mesure et
          l'OMRA depuis les années quatre-vingt-dix. On vous propose tous types
          de vacances adaptés à vos envies. Séjours au plus près ou au bout du
          monde, de magnifiques circuits inoubliables mais aussi des escapades
          week-ends en Tunisie et à l'étranger. Nous proposons ainsi toutes
          sortes de voyages maritimes organisés avec nos partenaires. On vous
          garantie d'avoir une expérience mémorable avec nous. Votre satisfaction
          est une priorité pour nous.
        </p>
      </SpanStyled>

      <Section id="services">
        {data.map((service, index) => {
          return (
            <div className="service" key={index}>
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </Section>
    </StyledServices>
  );
}

const StyledServices = styled.div`
  /* Add any additional styling for the entire component here */
`;

const SpanStyled = styled.span`
  display: block;
  padding-top: 5rem;
  padding-left: 10%;
  padding-right : 10%;
  p {
    /* Add styling for the text content here */
    margin: 0;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;


const Section = styled.section`
  padding: 4rem 0; /* Adjusted padding */
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr)); /* Adjusted for smaller screens */
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem; /* Smaller padding */
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2rem; /* Smaller icon size */
      }
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr)); /* Adjusted for medium-sized screens */
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Adjusted for smaller screens */
  }
`;
