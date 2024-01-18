import styled from "styled-components";
import Destination1 from "../assests/Destination1.png";
import Destination2 from "../assests/Destination2.png";
import Destination3 from "../assests/Destination3.png";
import Destination4 from "../assests/Destination4.png";
import Destination5 from "../assests/Destination5.png";
import Destination6 from "../assests/Destination6.jpg";
// import info1 from "../assests/info1.png";
// import info2 from "../assests/info2.png";
// import info3 from "../assests/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapour",
      subTitle: "Singapour, officiellement la République de Singapour, est un",
      cost: "A partir de 4 500 TND",
      duration: "Environ 2 nuits de voyage",
    },
    {
      image: Destination2,
      title: "Thaïlande",
      subTitle: "La Thaïlande est un pays d'Asie du Sud-Est. Elle est connue pour",
      cost: "A partir de 6 000 TND",
      duration: "Environ 2 nuits de voyage",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, capitale de la France, est une grande ville européenne et une",
      cost: "A partir de 5 000 TND",
      duration: "Environ 2 nuits de voyage",
    },
    {
      image: Destination4,
      title: "Nouvelle-Zélande",
      subTitle: "La Nouvelle-Zélande est un pays insulaire dans le",
      cost: "A partir de 2 500 TND",
      duration: "Environ 1 nuit de voyage",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora est une petite île du Pacifique Sud au nord-ouest de",
      cost: "A partir de 10 000 TND",
      duration: "Environ 2 nuits et 2 jours de voyage",
    },
    {
      image: Destination6,
      title: "Londres",
      subTitle: "Londres, la capitale de l'Angleterre et du Royaume-Uni, est",
      cost: "A partir de 4 500 TND",
      duration: "Environ 3 nuits et 2 jours de voyage",
    },
  ];
  

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Destinations recommandées</h2>
      </div>
      
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  {/* <img src={info1} alt="" /> */}
                  {/* <img src={info2} alt="" /> */}
                  {/* <img src={info3} alt="" /> */}
                </div>
                <h4>{destination.cost}</h4>
              </div>
              
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

