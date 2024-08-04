import {
  ceoDavid,
  managerYori,
  admTata,
  advogadaSoraya,
  techVitor,
  LuckasCaio,
  psicologoDenner,
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
    content: <TeamCarouselCard img={admTata} />,
    url: "https://www.instagram.com/emilikarmaico",
  },
  {
    key: 3,
    content: <TeamCarouselCard img={advogadaSoraya} />,
    url: "https://www.instagram.com/soraya.advgamer",
  },
  {
    key: 4,
    content: <TeamCarouselCard img={techVitor} />,
    url: "https://www.instagram.com/vitordesenvolvedor/",
  },
  {
    key: 5,
    content: <TeamCarouselCard img={LuckasCaio} />,
    url: "https://www.instagram.com/luckascaio7/",
  },
  {
    key: 6,
    content: <TeamCarouselCard img={psicologoDenner} />,
  },
];

export default teamCarouselCards;
