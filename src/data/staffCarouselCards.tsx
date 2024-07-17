import {
  ceoDavid,
  managerYori,
  coachLuke,
  admTata,
  advogadaSoraya,
  competitiveVinnie,
  admRafael,
  // FelipeNovaes,
  marketingMilly,
  techVitor,
  LuckasCaio,
  FelipeAlves,
} from "../assets/img";
import TeamCarouselCard from "../components/TeamCarousel/Card";

const teamCarouselCards = [
  {
    key: 0,
    content: <TeamCarouselCard img={ceoDavid} />,
    url: "https://www.instagram.com/davidalexandrepro",
  },
  {
    key: 1,
    content: <TeamCarouselCard img={managerYori} />,
    url: "https://www.instagram.com/ian.capell/",
  },
  {
    key: 2,
    content: <TeamCarouselCard img={coachLuke} />,
    url: "https://www.instagram.com/1lukecoach",
  },
  {
    key: 3,
    content: <TeamCarouselCard img={admTata} />,
    url: "https://www.instagram.com/emilikarmaico",
  },
  {
    key: 4,
    content: <TeamCarouselCard img={advogadaSoraya} />,
    url: "https://www.instagram.com/soraya.advgamer",
  },
  {
    key: 5,
    content: <TeamCarouselCard img={competitiveVinnie} />,
    url: "https://www.instagram.com/vinnie_dk_oficial",
  },
  {
    key: 6,
    content: <TeamCarouselCard img={admRafael} />,
    url: "https://www.instagram.com/rafaelmaddog",
  },
  // {
  //   key: 7,
  //   content: <TeamCarouselCard img={FelipeNovaes} />,
  //   url: "https://www.instagram.com/fednovaes/",
  // },
  {
    key: 8,
    content: <TeamCarouselCard img={marketingMilly} />,
    url: "https://www.instagram.com/noze_codm/",
  },
  {
    key: 9,
    content: <TeamCarouselCard img={techVitor} />,
    url: "https://www.instagram.com/vitordesenvolvedor/",
  },
  {
    key: 10,
    content: <TeamCarouselCard img={LuckasCaio} />,
    url: "https://www.instagram.com/luckascaio7/",
  },
  {
    key: 11,
    content: <TeamCarouselCard img={FelipeAlves} />,
    url: "https://www.instagram.com/lz.alvess_gaming/",
  },
];

export default teamCarouselCards;
