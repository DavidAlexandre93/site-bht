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
  psicologoDenner,
  admRafael
} from "../assets/img";
import TeamCarouselCard from "../components/TeamCarousel/Card";

const lineupCarouselCards = [
  {
    game: "COD MOBILE",
    img: [
      {
        key: 0,
        content: <TeamCarouselCard img={analistaCompetitivoGodan} />,
      },
      {
        key: 1,
        content: <TeamCarouselCard img={coachMight} />,
      },
      {
        key: 2,
        content: <TeamCarouselCard img={competitivoAdmAlves} />,
      },
      {
        key: 3,
        content: <TeamCarouselCard img={competitivoCaveira} />,
      },
      {
        key: 4,
        content: <TeamCarouselCard img={competitivoCoachLuke} />,
      },
      {
        key: 5,
        content: <TeamCarouselCard img={competitivoOsijan} />,
      },
      {
        key: 6,
        content: <TeamCarouselCard img={competitivoReazy} />,
      },
      {
        key: 7,
        content: <TeamCarouselCard img={competitivoSteve} />,
      },
      {
        key: 8,
        content: <TeamCarouselCard img={competitivoVinnie} />,
      },
      {
        key: 9,
        content: <TeamCarouselCard img={psicologoDenner} />,
      },
    ],
  },
  {
    game: "COD WARZONE",
    img: [
      { key: 0, content: <TeamCarouselCard img={admRafael} /> },
    ],
  }
];

export default lineupCarouselCards;
