import {
  analistaCompetitivoGudan,
  coachMight,
  competitivoAdmAlves,
  competitivoCaveira,
  competitivoCoachLuke,
  competitivoOjisan,
  competitivoReazy,
  competitivoSteve,
  competitivoVinnie,
  marketingMilly,
} from "../assets/img";
import TeamCarouselCard from "../components/TeamCarousel/Card";

const lineupCarouselCards = [
  {
    game: "COD MOBILE",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={coachMight} />,
        name: "COD MOBILE - Coach Might",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoAdmAlves} />,
        name: "COD MOBILE - Adm Alves",
      },
      {
        key: 2,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoCaveira} />,
        name: "COD MOBILE - Caveira",
      },
      {
        key: 3,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoCoachLuke} />,
        name: "COD MOBILE - Coach Luke",
      },
      {
        key: 4,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoOjisan} />,
        name: "COD MOBILE - Ojisan",
      },
      {
        key: 5,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoReazy} />,
        name: "COD MOBILE - Reazy",
      },
      {
        key: 6,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoSteve} />,
        name: "COD MOBILE - Steve",
      },
    ],
  },
  {
    game: "COD MOBILE FEMININO",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={analistaCompetitivoGudan} />,
        name: "COD MOBILE FEMININO - Gudan",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={marketingMilly} />,
        name: "COD MOBILE FEMININO - Milly",
      },
      {
        key: 2,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoVinnie} />,
        name: "COD MOBILE FEMININO - Vinnie",
      },
    ],
  },
  // {
  //   game: "COD WARZONE",
  // type: 'lineup',
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "BLOODSTRIKE",
  // type: 'lineup',
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "HOK",
  // type: 'lineup',
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "PUBG MOBILE",
  // type: 'lineup',
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
  // {
  //   game: "COUNTER STRIKE 2",
  // type: 'lineup',
  //   img: [{ key: 0, content: <TeamCarouselCard /> }],
  // },
];

export default lineupCarouselCards;
