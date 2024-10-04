import {
  competitivoAdmAlves,
  competitivoCaveira,
  competitivoCoachLuke,
  competitivoOjisan,
  competitivoSteve,
  lineupCS2,
  lineupHOK,
  lineupPubgMobile,
  managerKira,
  lineupWarzone,
  managerFortzx,
  managerKamilla,
  managerMiguel,
  managerVinicius,
  managerVinnie,
  analistaCompetitivoGudan
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
        content: <TeamCarouselCard img={managerVinnie} />,
        name: "COD MOBILE - Manager Vinnie",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={analistaCompetitivoGudan} />,
        name: "COD MOBILE - Analista Gudan",
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
        content: <TeamCarouselCard img={competitivoSteve} />,
        name: "COD MOBILE - Steve",
      },
      {
        key: 6,
        type: "lineup",
        content: <TeamCarouselCard img={competitivoAdmAlves} />,
        name: "COD MOBILE - Adm Alves",
      }
  
    ],
  },
  {
    game: "COD WARZONE",
    type: "lineup",
    players: [
      {
        key: 0,
        type: "lineup",
        content: <TeamCarouselCard img={lineupWarzone} />,
        name: "COD WARZONE - Lineup Warzone",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={managerFortzx} />,
        name: "COD WARZONE - Manager Fortzx",
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
        content: <TeamCarouselCard img={lineupHOK} />,
        name: "HONOR OF KINGS - Lineup HOK",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={managerKamilla} />,
        name: "HONOR OF KINGS - Manager Kamilla",
      },
      {
        key: 2,
        type: "lineup",
        content: <TeamCarouselCard img={managerMiguel} />,
        name: "HONOR OF KINGS - Manager Kamilla",
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
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={managerKira} />,
        name: "PUBG MOBILE - Manager Kira",
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
        content: <TeamCarouselCard img={lineupCS2} />,
        name: "COUNTER STRIKE 2 - Lineup CS2",
      },
      {
        key: 1,
        type: "lineup",
        content: <TeamCarouselCard img={managerVinicius} />,
        name: "COUNTER STRIKE 2 - Manager Vinicius",
      },
      
    ],
  },
];

export default lineupCarouselCards;
