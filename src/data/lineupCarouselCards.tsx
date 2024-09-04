import {
  // analistaCompetitivoGudan,
  coachMight,
  competitivoAdmAlves,
  competitivoCaveira,
  competitivoCoachLuke,
  competitivoOjisan,
  competitivoReazy,
  competitivoSteve,
  lineupCS2,
  lineupHOK,
  lineupPubgMobile,
  lineupWarzone,
  managerFortzx,
  managerKamilla,
  managerMiguel,
  managerVinicius,
  managerVinnie,
  // competitivoVinnie,
  // marketingMilly,
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
      {
        key: 7,
        type: "lineup",
        content: <TeamCarouselCard img={managerVinnie} />,
        name: "COD MOBILE - Manager Vinnie",
      },
    ],
  },
  {
    game: "COD WARZONE",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={managerFortzx} />,
        name: "COD WARZONE - Manager Fortzx",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={lineupWarzone} />,
        name: "COD WARZONE - Lineup Warzone",
      },
    ],
  },
  {
    game: "HONOR OF KINGS",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={managerKamilla} />,
        name: "HONOR OF KINGS - Manager Kamilla",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={managerMiguel} />,
        name: "HONOR OF KINGS - Manager Miguel",
      },
      {
        key: 2,
        type: "lineup",
        content: <TeamCarouselCard img={lineupHOK} />,
        name: "HONOR OF KINGS - Lineup HOK",
      },
    ],
  },
  {
    game: "PUBG MOBILE",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={lineupPubgMobile} />,
        name: "PUBG MOBILE - Lineup PUBG Mobile",
      },
    ],
  },
  {
    game: "COUNTER STRIKE 2",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={managerVinicius} />,
        name: "COUNTER STRIKE 2 - Manager Vinicius",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={lineupCS2} />,
        name: "COUNTER STRIKE 2 - Lineup CS2",
      },
    ],
  },
];

export default lineupCarouselCards;
