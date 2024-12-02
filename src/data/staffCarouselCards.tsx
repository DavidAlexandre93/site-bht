import {
  ceoDavid,
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
    type: "staff",
    content: <TeamCarouselCard img={ceoDavid} />,
    name: "CEO David Alexandre",
    url: "https://www.instagram.com/davidalexandrepro",
  },
  {
    key: 1,
    type: "staff",
    content: <TeamCarouselCard img={admTata} />,
    name: "Adm Emili Karmaico",
    url: "https://www.instagram.com/emilikarmaico",
  },
  {
    key: 2,
    type: "staff",
    content: <TeamCarouselCard img={advogadaSoraya} />,
    name: "Advogada Soraya Vasconcelos",
    url: "https://www.instagram.com/soraya.advgamer",
  },
  {
    key: 3,
    type: "staff",
    content: <TeamCarouselCard img={techVitor} />,
    name: "Tech Vitor Batista",
    url: "https://www.instagram.com/vitordesenvolvedor",
  },
  {
    key: 4,
    type: "staff",
    content: <TeamCarouselCard img={LuckasCaio} />,
    name: "Adm Luckas Caio",
    url: "https://www.instagram.com/luckascaio7",
  },
  {
    key: 5,
    type: "staff",
    content: <TeamCarouselCard img={psicologoDenner} />,
    name: "Psicólogo Denner Santos",
    url: "https://www.instagram.com/denner.santoz",
  },
];

export default teamCarouselCards;
