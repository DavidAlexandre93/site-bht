import {
  analistaCompetitivoGodan,
  coachMight,
  competitivoAdmAlves,
  competitivoCaveira,
  competitivoCoachLuke,
  competitivoOsijan,
  competitivoReazy,
  competitivoSteve,
  competitivoVinnie,
  marketingMilly,
  psicologoDenner,
} from "../assets/img";
import TeamCarouselCard from "../components/TeamCarousel/Card";

const lineupCarouselCards = [
  {
    game: "COD MOBILE",
    img: [
      {
        key: 0,
        content: <TeamCarouselCard img={coachMight} />,
      },
      {
        key: 1,
        content: <TeamCarouselCard img={competitivoAdmAlves} />,
      },
      {
        key: 2,
        content: <TeamCarouselCard img={competitivoCaveira} />,
      },
      {
        key: 3,
        content: <TeamCarouselCard img={competitivoCoachLuke} />,
      },
      {
        key: 4,
        content: <TeamCarouselCard img={competitivoOsijan} />,
      },
      {
        key: 5,
        content: <TeamCarouselCard img={competitivoReazy} />,
      },
      {
        key: 6,
        content: <TeamCarouselCard img={competitivoSteve} />,
      },
      {
        key: 7,
        content: <TeamCarouselCard img={psicologoDenner} />,
      },
    ],
  },
  {
    game: "COD MOBILE FEMININO",
    img: [
      {
        key: 0,
        content: <TeamCarouselCard img={analistaCompetitivoGodan} />,
      },
      {
        key: 1,
        content: <TeamCarouselCard img={marketingMilly} />,
      },
      {
        key: 2,
        content: <TeamCarouselCard img={competitivoVinnie} />,
      },
    ],
  },
  // {
  //   game: "COD WARZONE",
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "BLOODSTRIKE",
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "HOK",
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "PUBG MOBILE",
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "COUNTER STRIKE 2",
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
];

export default lineupCarouselCards;
